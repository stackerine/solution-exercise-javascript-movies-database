const test = require("ava");
const { turnHoursToMinutes } = require("./index");
const movies = require("./data/movies");

test("turnHoursToMinutes - Should return a new array, not update the original one", t =>
  t.notDeepEqual(turnHoursToMinutes(movies), movies));

test("turnHoursToMinutes - The duration of the movie should be a number", t =>
  t.is(typeof turnHoursToMinutes(movies)[0].duration, "number"));

test("turnHourToMinutes - The duration of the movie should return the correct number to a short movie - 31 minutes", t => {
  const movieTry = [{ duration: "0h 31min" }];

  return t.is(turnHoursToMinutes(movieTry)[0].duration, 31);
});

test("turnHourToMinutes - The duration of the movie should return the correct number for really long movie - 341 minutes", t => {
  const movieTry = [{ duration: "5h 41min" }];

  return t.is(turnHoursToMinutes(movieTry)[0].duration, 341);
});

test("turnHourToMinutes - It should return the correct number when the duration is only in hours", t => {
  const movieTry = [{ duration: "2h" }];

  return t.is(turnHoursToMinutes(movieTry)[0].duration, 120);
});

test("turnHourToMinutes - It should return the correct number when the duration is only in minutes", t => {
  const movieTry = [{ duration: "54min" }];

  return t.is(turnHoursToMinutes(movieTry)[0].duration, 54);
});
