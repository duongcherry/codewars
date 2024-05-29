// DESCRIPTION:
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.


function toNumberArray(stringarray){
    return stringarray.map(num => Number(num))
  }
  
  //an array of integers as strings
  
  //return an array of integers/floats
  
  //["1", "4", "5"] => [1,4,5]
  //['3','5','7'] => [3,5,7]
  //['7','8','9'] => [7,8,9]