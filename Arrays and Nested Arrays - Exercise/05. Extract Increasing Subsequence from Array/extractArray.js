function solve(arr) {
let result = [];
let biggest = arr[0];
for(let index = 0; index < arr.length; index++) {
    let currentNum = arr[index];
    if(currentNum >= biggest) {
        result.push(currentNum)
        biggest = currentNum;
    }
}
return result;
}
 console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]))