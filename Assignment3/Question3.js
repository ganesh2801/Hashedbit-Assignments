
let string = 'INDIA';
let stringArray = string.split('');
stringArray.splice(3, 0, 'ONES');
let modifiedString = stringArray.join('');
console.log(modifiedString);
