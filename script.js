// question -1 answer :
function celsiusToFahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77

// question -2 answer :
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// question -3 answer :
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30

// question -4 answer :
function findSmallestNum(arr) {
  let smallNum = arr[0];
  for (let num of arr) {
    if (num < smallNum) {
      smallNum = num;
    }
  }
  return smallNum;
}
console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// question -5 answer :
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}
console.log(countVowels('hello world')); // 3
console.log(countVowels('Javascript')); // 3

// question -6 answer :
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(['a', 'b', 'c'])); // "a"

// question -7 answer :
function isArrayEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

// question -8 answer :
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040

// question -9 answer :
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // "olleh"
console.log(reverseString('world')); // "dlrow"

// question -10 answer :
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase('HELLO WORLD')); // "hello world"
console.log(toLowerCase('JavaScript')); // "javascript"

// qestion -11 answer :
function stringLength(str) {
  return str.length;
}

console.log(stringLength('hello')); // 5
console.log(stringLength('world')); // 5

// question -12 answer :
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b'], ['c', 'd'])); // ["a", "b", "c", "d"]

// question -13 answer :
function getLastElement(arr) {
  return arr.pop();
}
console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(['a', 'b', 'c'])); // "c"

// question -14 answer :
function getFirstCharacter(str) {
  return str[0];
}
console.log(getFirstCharacter('hello')); // "h"
console.log(getFirstCharacter('world')); // "w"

// question -15 answer :
function sumArray(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
