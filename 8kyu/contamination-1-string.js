// DESCRIPTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"



function contamination(text, char){
  
    //check str or char if ""
    //if not empty, loop and replace char 
    //return str
    
    if(text === "" || char === ""){
      return ""
    }else{
      let newText = ""
      
      for(let i = 0; i < text.length; i++){
        newText += char
        }
         return newText 
        }
    
  }
  
  //str, empty str, chars 
  
  //return char for each letter
  
  //"abc" "z" -> "zzz"
  //"", "z" -> ""
  //123, "" -> ""