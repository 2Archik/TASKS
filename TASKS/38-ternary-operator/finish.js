/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

//  Задача 1:
// function isArrayEmpty(inputArray) {
//   if (inputArray.length > 0) {
//     return "Массив не пустой";
//   }
//   return "Массив пустой";
// }

// Задача 2:
// function isArrayEmpty(inputArray) {
//   return inputArray.length > 0 ? "Массив не пустой" : "Массив пустой";
// }

// Задача 3 - явный возврат результата
// const isArrayEmpty = (inputArray) => {
//   return inputArray.length > 0 ? "Массив не пустой" : "Массив пустой";
// };

// Задача 3 - неявный возврат результата
const isArrayEmpty = (inputArray) =>
  inputArray.length > 0 ? "Массив не пустой" : "Массив пустой";

console.log(isArrayEmpty([1, 3]));
console.log(isArrayEmpty([]));
