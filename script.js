// Assignment Code
var generateBtn = document.querySelector("#generate");

// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.querySelector('uppercase');
const lowercaseEl = document.querySelector('lowercase');
const numbersEl = document.querySelector('num');
const symbolsEl = document.querySelector('sym');
const generateEl = document.querySelector('#generate');
const clipboardEl = document.querySelector('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Event listener to generate button
window.onload = function () {
  generate.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl;
  const hasLower = lowercaseEl;
  const hasNumber = numbersEl;
  const hasSymbol = symbolsEl;

  checkBox = document.getElementById('checkbox');

  if (isNaN(length) || length < 8 || length > 128) {
      window.alert("Need to specify characters");
  }
  else {

  resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);}
});
}
// Generator functions

let lower = 'abcdefghijklmnopqrstuvwxyz';
function getRandomLower() {
    for (var i = 0; i < lower.length; i++) {
      // console.log(lower[i])
      return lower[Math.floor(Math.random() * lower.length)];
    };
};

let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function getRandomUpper() {
  for (var j = 0; j < upper.length; j++) {
    return upper[Math.floor(Math.random() * upper.length)];
  }
};

let numbers = '0123456789';
function getRandomNumber() {
  for (var k = 0; k < numbers.length; k++) {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
};

let symbols = '!@#$%%^&*(){}[]=<>/,.'
function getRandomSymbol() {
  for (var l = 0; l < symbols.length; l++) {
    return symbols[Math.floor(Math.random() * symbols.length)];
  }  
};

// Write password to the #password input
function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = upper + lower + number + symbol;
  const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item =>Object.values(item)[0]);

  if(typesCount === 0) {
      window.alert("You must select at least one element to construct the password!");
      return '';
  
  }

  for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
  });

  }

// console.log(generatedPassword);
  const finalPassword = generatedPassword.slice(0,length);
  // console.log(finalPassword);
  return finalPassword;

}

// Copy pw to clipboard
function copyToClipboard() {
  // BONUS
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;
  
  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
}

generatePassword();
getRandomLower();
getRandomUpper();
getRandomNumber();
getRandomSymbol();
