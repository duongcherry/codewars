// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// my solution

function shortcut (string) {
    let vowels = ['a','e','i','o','u']
    
    return string.split('').filter(v => !vowels.includes(v)).join('')
    
    //vowels array
    //split string into array
    //filter out vowels from string array
    //return string  
  }