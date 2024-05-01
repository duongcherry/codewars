
// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.




function well(x){
  
  //filter method and get length of array 
  let counter = x.filter(ideas => ideas == 'good').length
  
  //conditional 
  if(counter < 1){
    return 'Fail!'
  }else if(counter < 3){
    return 'Publish!'
  }else if (counter >= 3){
    return 'I smell a series!'
  }
  
}


//function well(x){

// let counter = 0
  
// for(let i = 0; i < x.length; i++){
//   if(x[i]  == 'good'){
//     counter++
//   }
// }

// if(counter < 1){
//   return 'Fail!'
// }else if(counter < 3){
//   return 'Publish!'
// }else if (counter >= 3){
//   return 'I smell a series!'
// }