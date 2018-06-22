const data = require("./data/movies");

function convertStringTimeToMinutes(stringTime) {
  const splitPattern = new RegExp(/(\d*h)?\s?(\d*min)?/gim);
  const timeParts = splitPattern.exec(stringTime);

  const hours = timeParts[1] ? Number(timeParts[1].replace("h", "")) : 0;
  const minutes = timeParts[2] ? Number(timeParts[2].replace("min", "")) : 0;

  return hours * 60 + minutes;
}

function turnHoursToMinutes(movies) {
  return movies.map(film => ({
    ...film,
    duration: convertStringTimeToMinutes(film.duration)
  }));
}

function ratesAverage(movies) {
  const nbMovie = movies.length;
  const sumRates = movies.reduce((acc, val) => acc + Number(val.rate), 0);

  return Number(Number(sumRates / nbMovie).toFixed(2));
}

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(({ genre }) => genre.includes("Drama"));
  return ratesAverage(dramaMovies);
}

function orderByDuration(movies) {
  return turnHoursToMinutes(movies).sort((movie1, movie2) => {
    if (movie1.duration > movie2.duration) {
      return 1;
    } else if (movie1.duration < movie2.duration) {
      return -1;
    }
    return movie1.title >= movie2.title ? 1 : -1;
  });
}

function howManyMovies(movies) {
  return movies.filter(
    ({ director, genre }) =>
      genre.includes("Drama") && director === "Steven Spielberg"
  ).length;
}

function orderAlphabetically(movies) {
  const orderedMovies = movies.sort((movie1, movie2) => {
    if (movie1.title >= movie2.title) {
      return 1;
    }
    return -1;
  });

  return orderedMovies
    .map(({ title }) => title)
    .filter((movie, index) => index < 20);
}

/**
 * Take an array of movies and reduce rates by year
 * And returns an object keyed by year where values are an array with rates for this year
 * For exemple: { 2001: [8, 5], 2002: [3, 8]}
 * @param {Array} movies array of movies
 * @returns {Object} rates by year keyed by year
 */
function getRatesByYear(movies) {
  return movies.reduce((ratesByYear, movie) => {
    if (!ratesByYear[movie.year]) {
      ratesByYear[movie.year] = [];
    }

    return {
      ...ratesByYear,
      [movie.year]: [...ratesByYear[movie.year], movie.rate]
    };
  }, {});
}

/**
 * Take An object keyed by year where values are an array with rates for this year
 * For exemple: { 2001: [8, 5], 2002: [3, 8]} to be reduced with average function
 * And return the average rate by year
 * For example: { 2001: 8, 2002: 9, ...}
 * @param {Object} ratesByYear An object keyed by year where values are an array with rates for this year
 * @returns {Object} the reduces value of average by year
 */
function getAverageRateByYear(ratesByYear) {
  return Object.keys(ratesByYear).reduce((avgByYear, year) => {
    const rateSumForYear = ratesByYear[year].reduce(
      (rateSumByYear, movieRate) => rateSumByYear + movieRate,
      0
    );

    const avgForYear = rateSumForYear / ratesByYear[year].length;

    return {
      ...avgByYear,
      [year]: avgForYear
    };
  }, {});
}

/**
 * Take an object of keyed by year where values are average rate and return the most rated year with its rate
 * @param {Object} average rates by year
 * @returns {Object} an object { year: 0, rate: 0} where year is the year of the most rated year and rate it's score
 */
function getMaxRateByYear(averageRateByYear) {
  return Object.keys(averageRateByYear).reduce(
    (max, year) => {
      if (averageRateByYear[year] > max.rate) {
        return { year, rate: averageRateByYear[year] };
      }
      return max;
    },
    { year: 0, rate: 0 }
  );
}

function bestYearAvg(movies) {
  const ratesByYear = getRatesByYear(movies);

  const averageRateByYear = getAverageRateByYear(ratesByYear);

  const maxRate = getMaxRateByYear(averageRateByYear);

  if (maxRate.year === 0) {
    return "Sorry no movies";
  }

  return `The best year was ${maxRate.year} with an average rate ${
    maxRate.rate
  }`;
}

module.exports = {
  turnHoursToMinutes,
  ratesAverage,
  dramaMoviesRate,
  orderByDuration,
  howManyMovies,
  orderAlphabetically,
  bestYearAvg
};
