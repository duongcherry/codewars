// DESCRIPTION:
// Write a function that will take a key of X and place it in the middle of Y repeated N times.

// Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

// Rules:

// If X cannot be placed in the middle, return X.

// N will always be > 0.

// Example:

// X = 'A';

// Y = '*';

// N = 10;

// Y repeated N times = '**********';

// X in the middle of Y repeated N times = '*****A*****';


function middleMe(N, X, Y){
   
    //check to see if n is even or odd
    //conditional => if odd, return X 
    //else
    //create str with y.repeat(n)
    // find middle with n / 2 = index position to insert X 
    //return str 
    
    //     if(N % 2 !== 0){
    //       return X
    //     }else{
    //      let str = Y.repeat(N)
    //      return str.slice(0,N/2) + X + str.slice(-N/2) 
    //     }
    //   }


    return N % 2 !== 0 ? X : Y.repeat(N/2) + X + Y.repeat(N/2)
    
  
} 
  //(num, character, symbols)
  
  //return string => symbols * num with a character in the middle
  //if number is not even, return x/character instead 
  