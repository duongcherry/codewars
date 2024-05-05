// DESCRIPTION:
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"





function reverse(string){
 
    //convert to array using split method
    //reverse array
    //join back into array 
    
    return string.split(' ').reverse().join(' ') 
  }
  
  //strings, no numbers
  
  //string 
  
  //"Dog Cat" => "Cat Dog"
  //"Hello There" => "There Hello"
  //"Bye Hello" => "Hello Bye"