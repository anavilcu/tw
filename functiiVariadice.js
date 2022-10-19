function addToArray() {
    let args = arguments;
    let array = args[0];
    
    for ( var i = 1; i < args.length; i++){
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));

function addToArray2(array, ...args) {    
    for ( var i = 0; i < args.length; i++){
        array.push(args[i]);
    }
    return array;
}

let array2 = ["a"];

console.log(addToArray2(array2, "b", "c").join(", "));