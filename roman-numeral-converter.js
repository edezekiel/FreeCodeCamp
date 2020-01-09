function convertToRoman(num) {

    let converted = "";

    for (let i = 0; i < ROMAN_NUMERALS.length; i++) {
        let int = parseInt(Object.keys(ROMAN_NUMERALS[i]));
        let roman = ROMAN_NUMERALS[i][int]
        console.log(int, roman)
        while (int <= num) {
            converted += roman;
            num -= int;
        }
    }

    return converted;
}

// create hash table to look up roman numerals and values
let ROMAN_NUMERALS = [
    {1000: "M"},
    {900: "CM"},
    {500: "D"},
    {400: "CD"},
    {100: "C"},
    {90: "XC"},
    {50: "L"},
    {40: "XL"},
    {10: "X"},
    {9: "IX"},
    {5: "V"},
    {4: "IV"},
    {1: "I"}
]