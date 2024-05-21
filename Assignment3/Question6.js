let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = [];
for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > 5) {
        answer.push(inputArr[i]);
    }
}
console.log(answer);
