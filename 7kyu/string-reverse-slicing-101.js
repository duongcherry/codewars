// DESCRIPTION:
// You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

// Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

// Examples
// '123'   ==>  ['321', '21', '1']
// 'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']


function reverseSlice(str) {
  
    //string into array 
    //reverse array elements then join back into string
    //create an empty array
    //push the string into array 
    //increment slice with index
    //return array 
    
    let reverseStr = str.split('').reverse().join('')
    let arr = []
  
    for(let i = 0; i < reverseStr.length; i++){
      arr.push(reverseStr.slice(i))
    }
    
    return arr 
    
  }
  
  //string >2 characters long
  
  //return an array of strings, reversed, with one less left character each time
  
  //"abc" => ['cba','ba','a']
  //"321" => ['123', '23','3']
  //"cba" => ['abc','bc','c']