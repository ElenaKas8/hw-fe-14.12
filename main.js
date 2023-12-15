//* 1) Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//^ [Make sure you type the exact thing I wrote or the program may not execute properly]

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

//* 2 Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//
// Example:
//
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
//
//
// function welcomePerson(name, city, state) {
//   const fullName = name.join(" ");
//   const welcomeMessage = `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
//
//   return welcomeMessage;
// }
//
// const nameArray = ["John", "Smith"];
// const city = "Phoenix";
// const state = "Arizona";
//
// const result = welcomePerson(nameArray, city, state);
// console.log(result);

//* 3) Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.
//* Определите общее количество цифр целого числа (n>=0), заданного в качестве входных данных функции. Например, 9 — однозначное число, 66 — 2-значное, а 128685 — 6-значное. Будьте осторожны, чтобы избежать переполнения/недополнения.

// Все входные данные будут действительными.

// function digits(n) {
//   return n.toString().length;
// }
// console.log(digits(128685));

//* 4)Wilson primes satisfy the following condition. Let P represent a prime number.Then,((P-1)! + 1) / (P * P)should give a whole number.Your task is to create a function that returns true if the given number is a Wilson prime.

//&Простые числа Вильсона удовлетворяют следующему условию. Пусть P представляет собой простое число.Затем((P-1)!+1)/(P*P) должен дать целое число.Ваша задача — создать функцию, которая возвращает true, если заданное число является простым числом Вильсона

function amIWilson(p) {
  const result = ((p - 1) * (p - 1) + 1) / (p * p);
  if (Number.isInteger(result)) {
    return true;
  } else {
    return false;
  }
}
console.log(amIWilson(5));
