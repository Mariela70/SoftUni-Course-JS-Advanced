function sum(numAsStrings) {
let first = numAsStrings.shift();
let last = numAsStrings.pop();

const result = Number(first) + Number(last);

console.log(result);
}
sum(['20', '30', '40'])