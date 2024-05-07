
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.




function DNAtoRNA(dna) {
    return dna.replaceAll('T','U')

}



// function DNAtoRNA(dna) {
  
//     //string to array 
//     //map method to parse through array
//     //check to see if array contains "T"
//     //replacing "T" with "U"
    
//     let arr = dna.split('')
    
//     let rna = arr.map(el => "T".includes(el) ? el.replace("T","U") : el).join('')
//     return rna 
    
//   }
  
  
  //string, case doesn't matter
  
  //returning string 
  
  //TTT => UUU
  //GATA => GAUA
  //GGAA => GGAA