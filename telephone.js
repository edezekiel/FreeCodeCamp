function telephoneCheck(str) {
    // Set up your Booleans here
    let hasTenDigits = false;
    let hasElevenDigits = false;
    let startsWithOne = false;
    let hasPermittedCharsOnly = false;
    let hasCorrectParentheses = false;
  
    // Write regular expressions here so that the Booleans contain the correct values
    let permittedCharsRegEx = /[^0-9\s-()]/g;
    hasPermittedCharsOnly = !permittedCharsRegEx.test(str);
  
    let digitsOnly = str.replace(/\D/g,'');  
  
    let hasTenDigitsRegEx = /\d{10}/g;
    hasTenDigits = hasTenDigitsRegEx.test(digitsOnly)
  
    let hasElevenDigitsRegEx = /\d{11}/g;
    hasElevenDigits = hasElevenDigitsRegEx.test(digitsOnly)
  
    let startsWithOneRegEx = /^1/
    startsWithOne = startsWithOneRegEx.test(str);
  
    console.log(str, hasPermittedCharsOnly, hasTenDigits, hasElevenDigits, startsWithOne)
    // Use the Booleans to return true or false, without needing to string together one complex regular expression
    if (!hasTenDigits && !hasElevenDigits) {
      return false;
    } else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
      return false;
    } else if (hasElevenDigits && !startsWithOne) {
      return false;
    } else {
      return true;
    }
  }
  
  telephoneCheck("555-555-5555");