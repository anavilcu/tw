function par(arr){
    var rezultat=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            rezultat.push(arr[i])
        }
    }

    return rezultat
}

console.log(par([2, 4, 6, 7, 8]))