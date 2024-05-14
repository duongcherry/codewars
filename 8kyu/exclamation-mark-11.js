// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


// function replace(s){
  
//     let vowelsArr = "aeiou".split('')
//     let strArr = s.split('')
  
//     for(let i = 0; i < strArr.length; i++){
//       if(vowelsArr.includes(strArr[i].toLowerCase())){
//         strArr[i] = "!"
//       }
//     }
    
//     return strArr.join('')
//   }
  
  
//   //create vowels & string array 
//   //iterate through array 
//   //check for vowels, case sensitive
//   //replace vowels with "!"
//   //return string 



//REFACTOR 

function replace(s){

    //create an array of vowels & string 
    //iterate through array 
    //conditional to check for vowels in lowercase 
    //replace vowels with "!"
    
    let vowelsArr = 'aeiou'.split('')
    
    let strArr = s.split('').map(x => vowelsArr.includes((x).toLowerCase()) ? "!" : x).join('')
  
    return strArr
    
  }
  
  //string, lowercase/uppercase, ! (no numbers, space)
  
  //return string with vowels replaced with ! 
  
  //"Hello" => "H!ll!"
  //"aeiou" => "!!!!!"
  //"AEiOu" => "!!!!!"