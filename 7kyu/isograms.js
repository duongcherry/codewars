//DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//my solutions
// function isIsogram(str){
//     //lowercase array
//     let arr = str.toLowerCase().split('')
    
//     //check for duplicates
//     return arr.every(x => arr.indexOf(x) == arr.lastIndexOf(x))
    
//   }

  function disemvowel(str) {
    str = str.split('')
    
    let vowelArr = ['a','e','i','o','u']
    
    return str.filter(v => !vowelArr.includes(v.toLowerCase())).join('')
  
  }
