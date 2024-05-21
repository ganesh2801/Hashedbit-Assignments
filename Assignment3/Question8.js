function repeatedSumOfDigits(num) {
    if (num < 10) {
        return num;
    }
    let strNum = num.toString();
    let sum = 0;
    for (let digit of strNum) {
        sum += parseInt(digit);
    }
    return repeatedSumOfDigits(sum);
}
console.log(repeatedSumOfDigits(456));