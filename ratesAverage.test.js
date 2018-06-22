const test = require("ava");
const { ratesAverage } = require("./index");
const movies = require("./data/movies");

test("ratesAverage - Should return a number", t =>
  t.is(typeof ratesAverage(movies), "number"));

test("ratesAverage - You should return the average rate of 2 movies with rate 8 each!", t =>
  t.is(ratesAverage([{ rate: 8 }, { rate: 8 }]), 8));

test("ratesAverage - It should be rounded to 2 decimals digits", t =>
  t.is(
    ratesAverage([{ rate: 8 }, { rate: 9 }, { rate: 9 }, { rate: 7 }]),
    8.25
  ));

test("ratesAverage - It should be rounded to nearest hundredths ", t =>
  t.is(ratesAverage([{ rate: 8 }, { rate: 9 }, { rate: 9 }]), 8.67));
