function solve(number) {
    const result = [];

    for(let num of number) {
        if(num < 0) {
            result.unshift(num);
        }else {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}
solve([7, -2, 8, 9]);