// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"





function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }
  
  
  //parameters - always a string, no numbers 
  //returns a string, names are swapped with a space in the middle 
  //bob bobberton -> bobberton bob, Cherry Duong -> Duong Cherry, Mary Gladson -> Gladson Mary 
  //str split into an array 
  //return the string in a template literal 
  //solution
  //
  //   str = str.split(' ')
  //   return `${str[1]} ${str[0]}`
  
  
  //OR
  //split str into array
  //reverse method
  //join method with space delimiter 