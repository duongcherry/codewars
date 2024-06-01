// DESCRIPTION:
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.



function removeRotten(bagOfFruits){

    //check to see if array is empty
    //iterate through array, replace "rotten", with empty str, to lowercase 
    
   if(!bagOfFruits){
     return []
   }
    
   return bagOfFruits.map(el => el.replace('rotten','').toLowerCase())
    
    
  }
  
  //array of strings 
  
  //array with rottenFruit replaced with a fruit
  //all elements in array will be in lowercase 
  
  //['cherry','rottenApple'] => ['cherry','apple']
  //['banana','banana','banana'] => ['banana','banana','banana'] 
  //[] => []