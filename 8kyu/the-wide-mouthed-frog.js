
// DESCRIPTION:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.



function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide" 
  }
  
  
  
  //   if(animal.toLowerCase() !== "alligator"){
  //     return "wide"
  //   }else{
  //     return "small"
  //   }
  
  //PREP
  
  //parameters - case sensitive, only strs
  //returns str wide or small
  //bird = wide, dog = wide, alligator = small 
  //logical expression checking to see if the animal is not an alligator = wide, but if it is, it would be small 