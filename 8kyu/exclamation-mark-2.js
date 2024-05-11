
// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


function remove (string) {  
  
    //check to see if "!" at end of string
    //if true, remove "!"
    
    while(string.endsWith("!")){
      string = string.slice(0,-1)
    }
    return string
  }
  
  //string, with or without ! 
  
  //returning a string with all ! from the end removed 
  
  //"!!Hi!" => "!!Hi"
  //"Hi" => "Hi"
  //"Hi!!!" => "Hi"