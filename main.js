let Phrase = require("mkdirwils-palindrome");

let string = prompt("Enter a word for palindrome testing")

let phrase = new Phrase(string)

if (phrase.palindrome()){
 alert(`${string} is a plaindrome`)
}
else {
alert(`${string} is not a palindrome`)
}