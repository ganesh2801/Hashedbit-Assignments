function sumOfProducts(n1, n2) {
    const digits1 = Array.from(String(n1), Number);
    const digits2 = Array.from(String(n2), Number);
    let sum = 0;
    for (let i = 0; i < Math.max(digits1.length, digits2.length); i++) {
        const digit1 = digits1[i] || 0;
        const digit2 = digits2[i] || 0;
        sum += digit1 * digit2;
    }
    return sum;
}
console.log(sumOfProducts(6, 34));
console.log(sumOfProducts(123, 456));