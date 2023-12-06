let age = 42;

let year = 1980;
console.log(age, year);
age = 43;
console.log(age, year);
const points = 100;
console.log(points);
var key = 'key';
console.log(key.length);
let word = 'Hello, World!';
console.log(word);
let firstName = 'Samer';
let lastName = 'Saida';
let fullName = firstName+' '+lastName;
console.log(fullName);
console.log(fullName[1]);
let result = fullName.toUpperCase()
console.log(result, fullName);
let index = fullName.indexOf('S');
console.log(index);
index = fullName.lastIndexOf('S');
console.log(index);

// Common String methods:
let email = 'ssaida@gmail.com';
result = email.lastIndexOf('s');
console.log(result);
result = email.slice(4, 10);
console.log(result);
result = email.substring(4, 10);
console.log(result);
result = email.replace('s','x');
console.log(result);
// Numbers:
let radius = 10;
let pi = Math.PI;
console.log(pi, radius, Math.pow(radius, pi ));
let likes = 10;
likes++;
console.log(likes);
likes *= 3;
console.log(likes);