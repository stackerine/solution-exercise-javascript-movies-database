const test = require("ava");
const { orderAlphabetically } = require("./index");
const movies = require("./data/movies");

test("orderAlphabetically - Return the rate of a single element array!", t =>
  t.is(typeof orderAlphabetically(movies), "object"));

test("orderAlphabetically - Only return the title of the movies! Each element should be a string", t => {
  t.is(typeof orderAlphabetically([{ title: "aab" }])[0], "string");
});

test("orderAlphabetically - If there are less than 20 elements, return all of them.", t => {
  var moviesArr = [{ title: "aab" }, { title: "bab" }, { title: "acb" }];

  t.is(orderAlphabetically(moviesArr).length, 3);
});

test("orderAlphabetically - If there are more than 20 elements, return only 20 of them.", t => {
  var moviesArr = [
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aab" },
    { title: "bab" },
    { title: "acb" }
  ];

  t.deepEqual(orderAlphabetically(moviesArr).length, 20);
});

test("orderAlphabetically - You should order them alphabetically.", t => {
  var moviesArr = [
    { title: "aab" },
    { title: "aaa" },
    { title: "abc" },
    { title: "acb" },
    { title: "abb" }
  ];

  t.deepEqual(orderAlphabetically(moviesArr), [
    "aaa",
    "aab",
    "abb",
    "abc",
    "acb"
  ]);
});

test("orderAlphabetically - You should return the top20 after order them alphabetically.", t => {
  var moviesArr = [
    { title: "aab" },
    { title: "bab" },
    { title: "acb" },
    { title: "aaa" },
    { title: "bbb" },
    { title: "anc" },
    { title: "kns" },
    { title: "zds" },
    { title: "pow" },
    { title: "gda" },
    { title: "res" },
    { title: "ter" },
    { title: "bca" },
    { title: "ccc" },
    { title: "bbt" },
    { title: "qas" },
    { title: "kmn" },
    { title: "frt" },
    { title: "afb" },
    { title: "agb" },
    { title: "apo" },
    { title: "poa" },
    { title: "cdf" },
    { title: "sea" },
    { title: "lom" },
    { title: "acs" },
    { title: "qas" },
    { title: "mns" },
    { title: "bvc" },
    { title: "gha" },
    { title: "lkj" },
    { title: "era" },
    { title: "ert" },
    { title: "tex" },
    { title: "zas" },
    { title: "pol" }
  ];

  t.deepEqual(orderAlphabetically(moviesArr), [
    "aaa",
    "aab",
    "acb",
    "acs",
    "afb",
    "agb",
    "anc",
    "apo",
    "bab",
    "bbb",
    "bbt",
    "bca",
    "bvc",
    "ccc",
    "cdf",
    "era",
    "ert",
    "frt",
    "gda",
    "gha"
  ]);
});
