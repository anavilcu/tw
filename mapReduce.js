const squareDimensions = [3, 5, 12, 3, 5, 3];

const getTotalArea1 = (squareDimensions) => {
    return squareDimensions
        .map ((side) => {
            return side * side;
        })
}

console.log(getTotalArea1(squareDimensions));

const getTotalArea2 = (squareDimensions) => {
    return squareDimensions
        .map ((side) => {
            return side * side;
        })
        .reduce((prev, current) => {
            return prev + current;
        }, 0);
}

console.log(getTotalArea2(squareDimensions));

const getTotalArea3 = (squareDimensions) => 
    squareDimensions
        .map ((side) =>  side * side )
        .reduce((prev, current) => prev + current, 0);

console.log(getTotalArea3(squareDimensions));

//Implementați o funcție care primește ca parametrii un array de numere și un număr 
//și returnează suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.

const functie=(array, nr)=>{

    var  copie=[]

    for(var i=0;i<array.length;i++){
        if(array[i]%nr==0){
            copie.push(array[i])
        }
    }

    var rezultat=copie.reduce((prev, current) => prev + current, 0);

    return rezultat

}

console.log(functie([3,6,5,7,8],3))