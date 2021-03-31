'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // destructuring an array
// console.log(x, y, z);
// console.log(arr); // array is not changed

// taking the first two elements from an array using this method
// Using a space below EX ( ,  , ) makes it skip an element in the array
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main; // switching values in the array method
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// console.log(restaurant.order(2, 0)); // pulling values objects in the array using the order function above

// // recieve two return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];

// // const [i, j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values

// // without setting values in the array to = 1 we get undefined
// // when values are equal to 1 we can guess whats in the array
// const [p = 1, q = 1, r = 1] = [8, 9];

// console.log(p, q, r);

// ********************* Destructuring objects *****************

//The destructuring assignment syntax is a JavaScript
//expression that makes it possible to unpack values from arrays, or
//properties from objects, into distinct variables.

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ingredients}`);
//   },
// };

// creates three new variables on restuarant object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // retrieves data from the restaurant object
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags); //variable names that are created
// helpful when dealing with 3rd party data

// setting default values to destruct
// there is no property on the restaurant object called menu empty array []
// without the empty array we get undefined, nothing to deconstruct
// default value [] helpful when data is not hardcoded
// getting data from api etc.

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// ****************** Mutating Variables  ************

// Destructuring Array

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b); // changed variables a, b into array values 23, 7

// *********  Nested objects **************

// destructuring nested objects able to get values without variables
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// *************** spread operator ************

// const arr = [7, 8, 9];

// // adding to an array and keeping current array values
// const badNewArr = [1, 2, 5, 6, 0, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr]; // spread operator to retrieve array elements
// console.log(newArr);

// console.log(...newArr); // to retrieve array elements
// console.log(1, 2, 7, 8, 9); // same as line 159

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // creating new array based on existing array and adding an element
// console.log(newMenu);

// spread operator similar to destructuring
// spread opertator takes all elements from an array and doesnt create new variables
// we can only uses it where values are separated by commas
// can create shallow copys of array and merge two arrays together

// COPY ARRAY

// const mainMenuCopy = [...restaurant.mainMenu];

// // JOIN 2 ARRAYS TOGETHER

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables are arrays, strings, maps, sets. NOT OBJECTS!

// const str = 'Jonas';

// const letters = [...str, , 'S']; // unpacked array with spread operator
// console.log(letters);
// console.log(...str); // backslash escaping used betweem let\'s prettier gets rid of it

// console.log(`${..str} Schmedtman`); // unexpected token This does not work
/* spread operator doesnt work in a template literal 
because its not a place that expects multiple values
seperated by a comma */

/* multiple values are usually expected when we pass multple
 values into a function or build a new array */

// REAL WORLD EXAMPLE!!!!

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'), ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); // ES6 syntax!

// ************  OBJECTS ******************
//create new restuarant object with all data from original plus additional data

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guissepe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); // printing just name of restuarant
// console.log(restaurant.name); // printing just names of restuarant

// console.log(restaurant);
// console.log(restaurantCopy);

//  *********   The Rest Pattern and Parameters  *******

///1) DESTRUCTURING

// pack elements into array
// Spread, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // REST PATTERN  left hand side of array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // skipping elements from array, collecting other elements from array
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2)  Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// Use ANY data type, return ANY data type,
// short-circuiting
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);
// // short cirtctuing log first truthy value gets logged
// // if the first operant is true javascript doesnt look further
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;

// console.log(guests2);

// console.log('---- AND ----');

// console.log(0 && 'jonas');
// console.log(7 && 'jonas');
// console.log('Hello' && 23 && null && 'jonas');

// //Practical example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // *********   The Nullish Coalescing Operator  *********

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///////////////////////////////////////
// Coding Challenge #1

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
// using destructuring
const [players1, players2] = game.players;

console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

//3.

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

//6.

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'kimmich');

printGoals('Davis', 'Muller');
