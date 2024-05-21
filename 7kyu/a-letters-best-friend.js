// DESCRIPTION:
// Task
// Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

// Worked Example
// ("he headed to the store", "h", "e") ➞ True

// # All occurences of "h": ["he", "headed", "the"]
// # All occurences of "h" have an "e" after it.
// # Return True

// ('abcdee', 'e', 'e') ➞ False

// # For first "e" we can get "ee"
// # For second "e" we cannot have "ee"
// # Return False



function bestFriend(txt, a, b) {
    //iterate through txt
    //identify a 
    //then identify if index of a + 1 == b
    
   for(let i = 0; i < txt.length; i++){
     if(txt[i] == a && txt[i + 1] !== b) return false
     }
    return true 
  }
    
  
  
  
  //string of words, char1, char2
  
  //return true or false 
  //every char1 has to be followed by char2 in every occurence 
  
  //"he headed","h","e" => true
  //'abcdee','e','e' => false
  //'hello','l','l' => false