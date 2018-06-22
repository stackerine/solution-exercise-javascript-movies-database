const test = require("ava");
const { howManyMovies } = require("./index");
const movies = require("./data/movies");

test("howManyMovies - Return the rate of a single element array!", t =>
  t.is(typeof howManyMovies(movies), "number"));

test("howManyMovies - Should return undefined if the array is empty", t =>
  t.is(howManyMovies([]), 0));

test('howManyMovies - Return "Steven Spielberg directed 0 drama movies!" if he does not directed none of the movies in the array', t =>
  t.is(
    howManyMovies([
      {
        director: "James McTeigue",
        genre: ["Action", "Drama", "Thriller"]
      }
    ]),
    0
  ));

test('howManyMovies - Only drama movies! Should return "Steven Spielberg directed 1 drama movies!"', t =>
  t.is(
    howManyMovies([
      {
        director: "Steven Spielberg",
        genre: ["Action", "Drama", "Thriller"]
      },
      {
        director: "Steven Spielberg",
        genre: ["Action"]
      }
    ]),
    1
  ));

test('howManyMovies - Only Steven Spielberg movies! Should return "Steven Spielberg directed 2 drama movies!"', t =>
  t.is(
    howManyMovies([
      {
        director: "Steven Spielberg",
        genre: ["Action", "Drama", "Thriller"]
      },
      {
        director: "James McTeigue",
        genre: ["Action", "Drama"]
      },
      {
        director: "Karl Moses",
        genre: ["Thriller", "Drama"]
      },
      {
        director: "Steven Spielberg",
        genre: ["Drama", "Thriller"]
      }
    ]),
    2
  ));

test('howManyMovies - Should return "Steven Spielberg directed 4 drama movies!"', t =>
  t.is(howManyMovies(movies), 4));
