'use strict';
/*
Constant time
*/
function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}


/*
  O(n^2) since it is a nested for loop going through the length of arr1 and arr2
*/
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/*
  O(n)
*/
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/*
  O(n)
*/
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}


/*
  O(n^2)
*/
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}

/*
  O(n)
*/
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}


/*
  LogO(n)
*/
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

/*
  O(1)
*/
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/*
  O(n)
*/
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) return false;
  }
  return true;
}

/*
  O(n)
*/
let countSheep = function(numberOfSheep) {
  if (numberOfSheep <= 0) {
    return '';
  }
  console.log(`${numberOfSheep} - Another sheep jump over the fence`);
  return countSheep(numberOfSheep - 1);
};

/*
  O(n)
*/
let arrayDouble = function(array) {
  if (array.length === 0) {
    return [];
  }
  const doubled = [array[0] * 2];
  return doubled.concat(arrayDouble(array.slice(1)));
};

/*
  O(n)
*/
function reverseString(string) {
  if (string === '') {
    return '';
  }
  return reverseString(string.slice(1)) + string[0];
}

/*
  O(n)
*/
function triangularNumber(n) {
  if (n <= 1) {
    return 1;
  }
  return n + triangularNumber(n - 1);
}

/*
  O(n)
*/
function splitter(sentence, separator) {
  if (sentence === '') {
    return [''];
  }
  const inputToRecursion = sentence.slice(0, -1);
  const outputFromRecursion = splitter(inputToRecursion, separator);
  if (sentence[sentence.length - 1] === separator) {
    return outputFromRecursion.concat(['']);
  }
  const lastItem = outputFromRecursion[outputFromRecursion.length - 1];
  const newLastItem = lastItem + sentence[sentence.length - 1];
  return outputFromRecursion.slice(0, -1).concat([newLastItem]);
}

/*
  O(log(n))
*/
function recursionBinary(n){
  if(n === 0){ 
    return 0;
  }
  return (n % 2) + 10 * recursionBinary(Math.floor(n/2));
}

/*
  O(n)
*/
let findFactorial = function(n){
  if(n === 1){
    return 1;
  }
  return n * (findFactorial(n-1));
};

/*
  (O(2^n))
*/
let fibonacci = function(n){
  if(n <= 1){
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};

/*
  O(n^2)
*/
function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);
}



/*
  O(n) where n is the amount of nodes in the tree
*/
function generateIndentation(level) {
  let spaces = '';
  for (let i = 0; i < level; i += 1) {
    spaces += '    ';
  }
  return spaces;
}

function traverseFacebook(employee, level = 0) {
  console.log(generateIndentation(level) + employee.name);
  employee.children.forEach((child) => {
    return traverseFacebook(child, level + 1);
  });
}


/*
  O(n)
*/
function countSheepIterative(numSheep) {
  while (numSheep > 0) {
    console.log(`${numSheep} - Another sheep jump over the fence`);
    numSheep -= 1;
  }
}

/*
  O(n)
*/
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str.charAt(i);
  }

  return reversed;
}


/*
  O(n)
*/
function nthTriangular(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

/*
  O(n)
*/
function stringSplitter(sentence, separator) {
  const array = [];
  let newString = '';
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] !== separator) {
      newString += sentence[i];
    } else {
      array.push(newString);
      newString = '';
    }
  }

  array.push(newString);

  return array;
}

/*
  O(n)
*/
function binaryIterative(number){
  let binary = '';
  while(number > 0){
    binary = Math.floor(number % 2) + binary;
    number = Math.floor(number / 2);
  }
  return binary;
}


/*
  O(n)
*/
function factorialIterative(number){
  let factorial = 1;
  for(let i = number; i > 0; i--){
    factorial *= i;
  }
  return factorial;
}

/*
  O(n)
*/
function fibIterative(number){
  if(number <= 1){
    return number;
  }
  let sums = [1, 1];
  let j = 0;
  for(let i = 2; i < number; i++){
    j+=1;
    sums[j%2] = sums[0] + sums[1];
  }
  return sums[j%2];
}

/*
  O(n^3)
*/
function rotateWord(word) {
  const rotations = [];
  let rotatedWord = word;
  for (let i = 0; i < word.length; i++) {
    rotatedWord = rotatedWord.slice(1) + rotatedWord[0];
    rotations.push(rotatedWord);
  }
  return rotations;
}
function anagramsIterative(word){
  let anagrams = [word.charAt(0)];
  for(let i = 1; i < word.length; i++){
    const nextChar = word[i];
    let temp = [];
    for(let j = 0; j < anagrams.length; j++){
      temp = temp.concat(rotateWord(anagrams[j] + nextChar));
    }
    anagrams = temp;
  }
  return anagrams;
} 

