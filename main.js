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

