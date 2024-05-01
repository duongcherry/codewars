// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false




function XO(str) {
    
    //str lowercase 
    //loop
    //variables for counting x o 
    //conditional 
  
  let strArr = str.toLowerCase().split('')
  
  let x = 0
  let o = 0 
  
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] == "o"){
      o++
    }else if(strArr[i] == "x"){
      x++
    }
    
  }
  
    return x == o ? true : false
  
    
  
}


//input any characters, lowercase & uppercase, always a str 

//return true false 

//examples oo false , xO true, xOXo true 


  //change to lowercase 
    // let strArr = str.toLowerCase().split('')
    // return strArr.filter(s => s === "o").length == strArr.filter(s => s === "x").length
  
  