// //DESCRIPTION:
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function dnaStrand(dna){
  
    let newDna = ''
   
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === 'A'){
        newDna += 'T'
      }else if(dna[i] === 'T'){
        newDna += 'A'
      }else if(dna[i] === 'G'){
        newDna += 'C'
      }else if(dna[i] === 'C'){
        newDna += 'G'
      }    
    }
    return newDna
  }
  
  
  //strings with uppercase letters only
  
  //strings with uppercase letters
  
  //"TAT" => "ATA"
  //GTAG => "CATC"
  //"CACA" => "GTGT"