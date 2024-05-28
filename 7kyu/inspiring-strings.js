
// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"

function longestWord(stringOfWords) {
 
    //create an array
    //sort array items from longest to shortest by length
    //return the longest word  
    
    return stringOfWords.reduce((acc, c) => acc.length > c.length ? acc : c)
    
}

// let strArr = stringOfWords.split(' ').sort((a,b) => a.length - b.length)
// return strArr.slice(-1).join('')