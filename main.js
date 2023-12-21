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

// function amIWilson(p) {
// const result = ((p - 1) * (p - 1) + 1) / (p * p);
// if (Number.isInteger(result)) {
// return true;
// } else {
// return false;
// }
// }
// console.log(amIWilson(5));

//*5 Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//^ Дополните решение так, чтобы оно разбивало строку на пары из двух символов. Если количество символов в строке нечетное, то замените отсутствующий второй символ последней пары символом подчеркивания ('_').

// * 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']
// function solution(str) {
// if (str.length % 2 !== 0) {
// str += "_";
// }
// const result = [];
// for (let i = 0; i < str.length; i += 2) {
// result.push(str.slice(i, i + 2));
// }
// return result;
// }
//
//* 6 Modify the kebabize function so that it converts a camel case string into a kebab case.
//&Измените функцию kebabize так, чтобы она преобразовывала строку из camel case в kebab case."camelsHaveThreeHumps"  -->  "camels-have-three-humps""camelsHave3Humps"  -->  "camels-have-humps""CAMEL"  -->  "c-a-m-e-l"

// function kebabize(str) {
// return str
// .split("")
// .map((char, index) => {
// if (/[a-zA-Z]/.test(char)) {        Check if the character is a letter
// return char === char.toUpperCase() && index !== 0
// ? `-${char.toLowerCase()}`
// : char.toLowerCase();
// }
// return "";
// })
// .join("");
// }
//
// // console.log(kebabize("camelsHaveThreeHumps")); // Output: "camels-have-three-humps"
// // console.log(kebabize("camelsHave3Humps")); // Output: "camels-have-humps"
// console.log(kebabize("CAMEL")); // Output: "c-a-m-e-l"
//
//* 7 While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".If string contains 4 numbers but not consecutive it returns "not consecutive".

// function checkRoot(input) {
// Разбиваем строку на массив чисел, используя запятые как разделители
// const numbers = input.split(",").map(Number);

// Проверяем, что в массиве ровно 4 числа
// if (numbers.length !== 4 || numbers.some(isNaN)) {
// // return "incorrect input"; // Если условие не выполняется, возвращаем "неверный ввод"
// }
//
// Проверяем, что числа последовательные
// const isConsecutive = numbers.every(
// // (num, index) => index === 0 || num === numbers[index - 1] + 1
// );
//
// if (!isConsecutive) {
// // return "not consecutive"; // Если числа не последовательные, возвращаем "не последовательные"
// }
//Вычисляем произведение и добавляем 1, находим квадратный корень и возвращаем результат
// // const product = numbers.reduce((acc, num) => acc * num, 1);
// const squareRoot = Math.sqrt(product + 1);
//
// return `${squareRoot ** 2}, ${squareRoot}`;
// }
//Тесты
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
//
// describe("Fixed Tests", () => {
// it("Tests", () => {
// assert.strictEqual(checkRoot("4,5,6,7"), "841, 29");
// // assert.strictEqual(checkRoot("3,s,5,6"), "incorrect input");
// // assert.strictEqual(checkRoot("11,13,14,15"), "not consecutive");
// });
// });

//* 8-Given an array of 4 integers[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive. a:x1 b:y1 c:x2 d:y2

// function slope(points) {
// Extracting values from the array
// const [x1, y1, x2, y2] = points;

// Check if the slope is undefined (division by 0)
// if (x1 === x2) {
// return "undefined";
// }
//
// Calculate the slope and return it as a string
// const slopeValue = (y2 - y1) / (x2 - x1);
// return slopeValue.toString();
// }
//
// Example usage:
// const result = slope([1, 2, 3, 4]);
// console.log(result); // Output: "1"

//* 9-You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.If it is a square, return its area. If it is a rectangle, return its perimeter.

//*Example(Input1, Input2 --> Output):

//* 6, 10 --> 32
// *3, 3 --> 9
//* // Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
//

//&Вам даны длина и ширина четырехугольника. Этот четырехугольник может быть как прямоугольником, так и квадратом. Если это квадрат, верните его площадь. Если это прямоугольник, верните его периметр.

// Пример (Длина, Ширина --> Результат):
//
// 6, 10 --> 32
// 3, 3 --> 9
//
// // Примечание: в рамках этой задачи предполагается, что если длина и ширина равны, то это квадрат, в противном случае это прямоугольник.
// const areaOrPerimeter = function (l, w) {
// if (l === w) {
// return l * w;
// } else {
// return 2 * (l + w);
// }
// };

//* 10 Ваш друг посоветовал вам посетить новое представление в самом популярном театре города. Он много знает о искусстве, и его советы обычно хороши, но не на этот раз: выступление оказалось ужасно скучным. Вам настолько плохо, что хочется улизнуть, что довольно просто, особенно учитывая, что выход находится прямо за вашим рядом слева. Вам просто нужно перелезть через свое место и добраться до выхода.

// Основная проблема в том, что вы стеснительны: вам страшно, что вы можете заслонить вид (даже если всего на пару секунд) всем людям, сидящим за вами и в вашем столбце или в столбцах слева от вас. Чтобы набраться смелости, вы решаете вычислить количество таких людей и посмотреть, сможете ли вы, возможно, добраться до выхода, не беспокоя слишком многих людей.
//
// Учитывая общее количество рядов и столбцов в театре (nRows и nCols соответственно), а также ряд и столбец, в которых вы сидите, верните количество людей, которые сидят строго за вами и в вашем столбце или слева, предполагая, что все места заняты.
//
// Пример
//
// Для nCols = 16, nRows = 11, col = 5 и row = 3 вывод должен быть 96.
//
// function seatsInTheater(nCols, nRows, col, row) {
// return (nCols - col + 1) * (nRows - row);
// }

//* 11 Первый век охватывает период с года 1 по год 100 включительно, второй век - с года 101 по год 200 включительно, и так далее.

// Задача
//
// Учитывая год, вернуть номер столетия, в котором он находится.
//
// Примеры
//
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
//

// function century(year) {
//   const centuryNumber = Math.ceil(year / 100);

//   // Возвращаем результат
//   return centuryNumber;
// }

// //12 Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//      // Проверяем, что все входные значения являются положительными числами
//     if (length <= 0 || width <= 0 || height <= 0) {
//       throw new Error("Все значения длины, ширины и высоты должны быть положительными числами.");
//     }

//     // Вычисляем объем кубоида по формуле: V = lwh
//     const volume = length * width * height;

//     return volume;
//   }
// }

// // Пример использования функции
// const volume = Kata.getVolumeOfCuboid(3, 4, 5);
// console.log("Объем кубоида:", volume);

//*13 Return the Nth Even Number


// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

// function nthEven(n){
//   return n * 2 - 2
// }

//*14 Игра НБА длится 48 минут (четыре четверти по 12 минут). Игроки обычно не играют в полную версию игры, подключаясь и выключаясь по мере необходимости. Ваша задача — экстраполировать очки игрока за игру, если он отыграл полные 48 минут.

// Напишите функцию, которая принимает два аргумента: ppg (очки за игру) и mpg (минуты за игру) 
// и возвращает прямую экстраполяцию количества ppg за 48 минут, округленного до ближайшей десятой. Верните 0, если 0.

// Примеры:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Примечания:
// Все входные данные будут либо целыми числами, либо числами с плавающей запятой.
// Следуй за своей мечтой!


// function pointsPer48(ppg, mpg) {
//   if (mpg == 0) {
//     return 0
//   } 

//   const pointsPer48 = ppg / mpg * 48

  
// }
// pointsPer48(12, 20)
// pointsPer48(10, 10)


// 15-Учитывая неотрицательное целое число n, напишите функцию to_binary/ ToBinary, которая возвращает это число в двоичном формате.

to_binary(1)  /* should return 1 */
to_binary(5)  /* should return 101 */
to_binary(11) /* should return 1011 */

function to_binary(n) {
  return n.toString(2)
}

