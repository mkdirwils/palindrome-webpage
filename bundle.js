(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mkdirwils-palindrome");

let string = prompt("Enter a word for palindrome testing")

let phrase = new Phrase(string)

if (phrase.palindrome()){
 alert(`${string} is a plaindrome`)
}
else {
alert(`${string} is not a palindrome`)
}
},{"mkdirwils-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase


// Adds reverse to all strings
function reverse(content) {
 return Array.from(content).reverse().join("");
}

// Define a Phrase Object 
function Phrase(content){
 this.content = content;


 // returns content for letters 
 this.letters = function letters() {
  // this uses functional programming (filter)
  const RegEx = /[a-zA-Z]/i
  return Array.from(this.content).filter(character=>character.match(RegEx)).join("")


  // another approach using regexes' global g 
  // return (this.content.match(/[a-zA-Z]/gi) || []).join("");

  // // Imperative method
  // const RegEx = /[a-zA-Z]/i;
  // let theLetters = [];
  // Array.from(this.content).forEach(function(character){
  //  if(character.match(RegEx)){
  //   theLetters.push(character)
  //  }
  // })
  // return theLetters.join("")
 }

 // returns content processed for palindrome
 this.processedContent = function processedContent() {
  return this.letters().toLowerCase();
  
 }

 // return true if the phrase is a plaindrome and false if otherwise
 this.palindrome = function palindrome() {
  return this.processedContent() === reverse(this.processedContent());
 }
}


},{}]},{},[1]);
