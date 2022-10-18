function sorting(arr, command) {

    const numbers = arr.map(Number);

    if (command == 'asc') {
        return numbers.sort((a, b) => a - b);
    }
    else {
        return numbers.sort((a, b) => b - a);
    }

}