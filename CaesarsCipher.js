function rot13(str) { // LBH QVQ VG!
    let decodedString = "";
    let letters = /[a-z]/i;

    // loop over each character in the str
    for (let char of str) {
      // if character is letter, convert character and add to decodedString
      if (letters.test(char)) {
        let newCharCode = ((char.charCodeAt(0) - 65 + 13) % 26) + 65;
        decodedString += String.fromCharCode(newCharCode);
  
      // else add character to decodedString
      } else {
        decodedString += char;
      }
    }
    
    return decodedString;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");