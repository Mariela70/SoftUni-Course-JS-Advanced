function solve(arr) {
    let neuArr = []
    let num = 0;
    for(let index = 0; index < arr.length; index++){
        num++;
        let command = arr[index];
        if(command == 'add'){
            neuArr.push(num)
        }else if(command == 'remove'){
            neuArr.pop()
        }
    }
    if(neuArr.length == 0){
        console.log('Empty')
    }else{
        console.log(neuArr.join('\n'))
    }

}
solve(['add',
'add',
'add',
'add'])