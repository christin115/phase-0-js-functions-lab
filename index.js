function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
}

console.log(calculateTax(200)); 
console.log(convertToUpperCase("hello")); 
console.log(findMaximum(10, 25)); 
console.log(isPalindrome("radar")); 
console.log(isPalindrome("hello")); 
console.log(calculateDiscountedPrice(100, 20)); 




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };