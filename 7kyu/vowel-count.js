// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// //my solution 

function getCount(str) {
  
  let strArr = str.split('')
  let vowelsArr = "a,e,i,o,u".split(',')
  
  return strArr.filter(x => vowelsArr.includes(x)).length
  
  
  //split str into array
  //split vowels into array
  //filter arrays and get length 
  
  
}