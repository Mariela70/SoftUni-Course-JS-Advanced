function solve(array) {
    let result = '';

    for (let index = 0; index < array.length; index+=2) {
        result += array[index];
        result += ' ';
        
    }
    console.log(result)
}