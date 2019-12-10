function palindrome(str) {
    // Good luck!
    let alphaNumStr = ""
    let alphaNumArr = [];
  
    // remove all non-alphanumeric characters from str
  
    for (const ch of str) {
      if (isAlphaNumeric(ch)) {
        alphaNumStr += ch;
        // reverse string
        alphaNumArr.unshift(ch);
      }
    }
  
    if (alphaNumArr.length > 0) {
      console.log(alphaNumStr, alphaNumArr.join(""))
      return alphaNumStr.toLowerCase() === alphaNumArr.join("").toLowerCase() ? true : false
    } else {
      return false;
    }
  
  }
  
  // remove non-alphanumeric characters from string
  const isAlphaNumeric = ch => {
    return ch.match(/^[a-z0-9]+$/i) !== null;
  }
  
  palindrome("eye");
  