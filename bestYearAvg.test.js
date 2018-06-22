const test = require("ava");
const { bestYearAvg } = require("./index");
const movies = require("./data/movies");

test("bestYearAvg - Should return a number", t =>
  t.is(typeof bestYearAvg(movies), "string"));

test("bestYearAvg - Should return a sentence if the array is empty", t => {
  t.is(bestYearAvg([]), "Sorry no movies");
});

test("bestYearAvg - Should return the correct answer to a single element array", t => {
  t.is(
    bestYearAvg([{ year: "2007", rate: 8 }]),
    "The best year was 2007 with an average rate 8"
  );
});

test("bestYearAvg - Should return the correct answer to a multiple elements array", t => {
  t.is(bestYearAvg(movies), "The best year was 1972 with an average rate 9.2");
});

test("bestYearAvg - Should return the oldest year when there is a tie", t => {
  var newMoviesArr = [
    { year: "2000", rate: 9 },
    { year: "2000", rate: 8 },
    { year: "1978", rate: 10 },
    { year: "1978", rate: 7 }
  ];

  t.is(
    bestYearAvg(newMoviesArr),
    "The best year was 1978 with an average rate 8.5"
  );
});
