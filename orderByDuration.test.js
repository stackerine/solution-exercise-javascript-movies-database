const test = require("ava");
const { orderByDuration } = require("./index");
const movies = require("./data/movies");

test("orderByDuration - Return the rate of a single element array!", t =>
  t.is(typeof orderByDuration(movies), "object"));

test("orderByDuration - Should return the element in a single element array", t =>
  t.deepEqual(orderByDuration([{ duration: "1h 30min" }]), [{ duration: 90 }]));

test("orderByDuration - Return the new array in growing order", t =>
  t.deepEqual(
    orderByDuration([
      { duration: "1h 30min" },
      { duration: "3h" },
      { duration: "1h 40min" }
    ]),
    [{ duration: 90 }, { duration: 100 }, { duration: 180 }]
  ));

test("orderByDuration - If two movies have the same length, order them alphabetically by their title", t =>
  t.deepEqual(
    orderByDuration([
      { title: "abc", duration: "2h" },
      { title: "bac", duration: "1h 30min" },
      { title: "aab", duration: "1h 30min" }
    ]),
    [
      { title: "aab", duration: 90 },
      { title: "bac", duration: 90 },
      { title: "abc", duration: 120 }
    ]
  ));
