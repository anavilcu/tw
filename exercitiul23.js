function pare(...args) {
    
    let array = [];
    
    for ( var i = 0; i < args.length; i++){
        if(args[i]%2===0)
        {
            array.push(args[i]);
        }

    }
    return array;
}

console.log(pare(2, 5, 6, 7))