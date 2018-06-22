const test = require("ava");
const { dramaMoviesRate } = require("./index");
const movies = require("./data/movies");

test("dramaMoviesRate - Should return a number", t =>
  t.is(typeof dramaMoviesRate(movies), "number"));

test("dramaMoviesRate - Return the rate of a single element array!", t =>
  t.is(dramaMoviesRate([{ genre: ["Drama"], rate: 8 }]), 8));

test("dramaMoviesRate - Return Average even if one of the movies does not have rate!", t =>
  t.is(
    dramaMoviesRate([
      { genre: ["Drama"], rate: 8 },
      { genre: ["Drama"], rate: "" }
    ]),
    4
  ));

test("dramaMoviesRate - It should return the average of the array!", t =>
  t.is(
    dramaMoviesRate([
      { genre: ["Drama"], rate: 8 },
      { genre: ["Drama"], rate: 9 },
      { genre: ["Drama"], rate: 7 }
    ]),
    8
  ));

test("dramaMoviesRate - It should return the average of the array, float!", t =>
  t.is(
    dramaMoviesRate([
      { genre: ["Drama"], rate: 9 },
      { genre: ["Drama"], rate: 9 },
      { genre: ["Drama"], rate: 7 }
    ]),
    8.33
  ));

test("dramaMoviesRate - Only Drama Movies! You should return the average of Drama movies only!", t =>
  t.is(
    dramaMoviesRate([
      { genre: ["Drama"], rate: 8 },
      { genre: ["Romance"], rate: 9 },
      { genre: ["Drama"], rate: 7 }
    ]),
    7.5
  ));
