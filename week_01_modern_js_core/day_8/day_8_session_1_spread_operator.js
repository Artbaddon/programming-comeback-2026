
//Rest parametrs for sum all n numbers

function sumAll(...args) {//..args, all the arguments passed here will become an array called args
    let sum = 0;

    for (let arg of args) sum += args;
    return sum

}

