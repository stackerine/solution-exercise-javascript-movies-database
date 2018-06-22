# Niveau 3 - Javascript - Movie database

## Introduction

In this exercise you'll have to manipulate a JS array with movies inside.

- IMDB top 250 movies is located in the file `data/movies.js` in a JS array
- All functions you have to write are in the `index.js` file.

To validate each exercise, run the test command associated with it.

## Exercice 1 - String conversion

We get the info from the IMDB web page, but the duration info was saved in a format that difficult us a lot to compare movies.

Finding the longest movie is almost impossible using that format, so let's change it!

:bulb: Remember we have a methods to create a new array from another one!

Create a `turnHoursToMinutes` method that receive an array of movies as parameter, replace the duration info of each of the movies for it equivalent in minutes. For example:

```js
{
    "title":"The Shawshank Redemption",
    "year":"1994",
    "director":"Frank Darabont",
    "duration":"2h 22min",
    "genre":["Crime","Drama"],
    "rate":"9.3"
}
```

Should be:

```js
{
    "title":"The Shawshank Redemption",
    "year":"1994",
    "director":"Frank Darabont",
    "duration":"142",
    "genre":["Crime","Drama"],
    "rate":"9.3"
}
```

:checkered_flag: Check your code with: `yarn run test:turnHoursToMinutes`

:rotating_light: You must return a new array with all the info about the movie, not modify the original array!

## Exercise 2 - Average rate

These are the best movies based on their rates, so supposedly all of them have an awesome rate. In this iteration, we want to know the average rate of all of them and display it on the console. Complete `ratesAverage` method that receive an array as a parameter and solve the challenge.

The rate must be returned rounded to 2 decimals!

:checkered_flag: Check your code with: `yarn run test:ratesAverage`

:bulb: Maybe you want to "reduce" the data to a single value

## Exercise 3 - Drama average rate

Drama is the genre that repeats the most on our array, apparently, people love drama!

Complete `dramaMoviesRate` that receive an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.

Again, rounded to 2 decimals!

:checkered_flag: Check your code with: `yarn run test:dramaMoviesRate`

:bulb: Please don't Repeat yourself (DRY)

## Exercise 4 - Order movies by duration

We need to sort the movies in ascending order by their duration. You have to use `sort` function that is in native array. Create a method `orderByDuration` that receives an array as parameter and return the sorted array.

If two movies have the same duration, order them in alphabetically order by their title!

:checkered_flag: Check your code with: `yarn run test:orderByDuration`

:bulb: Look at the documentation for native array function `sort`

## Exercise 5 - What about Steven Spielberg?

One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that show up on our list, but we want to know how many!

Go ahead and create a `howManyMovies` method that receives an array of movies as a parameter and filter the array so we can have only the drama movies where Steven Spielberg is the director.

:checkered_flag: Check your code with: `yarn run test:howManyMovies`

## Exercice 6 - Order alphabetically

Another famous way to order the movies is to sort them alphabetically using the title key. But in this case we only need to print the title of the first 20. Easy Peasy for an expert like you

Create a orderAlphabetically method, that receive an array of movies and return an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive have less than 20 movies, return all of them order

:checkered_flag: Check your code with: `yarn run test:orderAlphabetically`

:bulb: Have a look at `filter` parameters

## Exercise 7 - Big bonus - The best rated year

Let's complicated a bit this thing. We always listen to classic movies, but we want to know, which year has the best average rate, so we can declare officially the BEST YEAR FOR CINEMA!

Complete the function `bestYearAvg`

Go ahead and find which year have the best average rate for the movies that were released on that year!

:checkered_flag: Check your code with: `yarn run test:bestYearAvg`
