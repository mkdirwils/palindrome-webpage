(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("mkdirwils-palindrome");


function palindromeTester(event) {
 event.preventDefault()
 
 let phrase = new Phrase(event.target.phrase.value);
 let palindromeResult = document.querySelector("#palindromeResult")

 if (phrase.palindrome()){
 palindromeResult.innerHTML = ` <strong>${phrase.content}</strong> is a plaindrome`
 }
 else {
 palindromeResult.innerHTML = `<strong>${phrase.content}</strong> is not a palindrome`
 }
}

document.addEventListener("DOMContentLoaded", function(){
 let tester = document.querySelector('#palindromeTester');

tester.addEventListener("submit", function(event){
 palindromeTester(event)
})
})


// you only need to add DOMContentLoaded if you add your script tag befor the html content or have specific fucntions uou want to run otherwise add the script tag after the html element or use modern ways like check mdn docs for script attributes (defer, async)


// button.addEventListener("click", palindromeTester)
// here palinrome tester is a callback. 
// when you just have one function command for the event, it is written like in above, however when you want to parse more than one function you write it like one below using DOMContenLoaded


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
  if (this.letters()){
   return this.processedContent() === reverse(this.processedContent());
  }
  else {
   return false
  }
 }
}


},{}]},{},[1]);
