# Phrase object (with palindrome detector)

This is a sample NPM module created while undertaing Learn Enough course on javascript offered by Michael Hartl

This module can be used as follows:

    $ npm install --global mkdirwils-palindrome
    $ vim test.js
    let Phrase = require("mkdirwils-palindrome");
    let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
    console.log(napoleonsLament.palindrome());
    $ node test.js
    true
