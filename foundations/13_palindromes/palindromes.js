const palindromes = function (string) {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789"
    const cleanString = string
                            .toLowerCase()
                            .split("")
                            .filter(letter => validCharacters.includes(letter))
                            .join("");
    const cleanStringReversed = cleanString.split("").reverse().join("");

    return cleanString === cleanStringReversed;
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
