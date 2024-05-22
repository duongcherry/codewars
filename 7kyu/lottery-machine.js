// DESCRIPTION:
// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"



function lottery(str){
   
  //split the str into an array 
  //filter out characters, leaving only numbers
  //check to see if array is empty 
  //filter out duplicates
  //return array back into a string 
 
  let numArr = str.split('').filter(char => !isNaN(char)) 
  
  if(numArr.length === 0){
    return "One more run!"
  }else{
   return numArr.filter((n,i) => numArr.indexOf(n) === i).join('')
  }
 
}

//string of letters (uppercase & lowercase), numbers

//a string of unique integers in order of appearance 

//"aB1l212" => "12"
//"ehacie" => "One more run!"
//"333" => "3"


