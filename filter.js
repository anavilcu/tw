const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
];

const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords1 = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength){
            return true;
        }
        return false;
    });
    return result;
};

console.log(filterWords1(words, forbiddenWord, minLength));
// expected output: Array [ 'wolf', 'snake', 'lion', 'horse' ]

const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//Folosiți metodele map() și filter() pentru a procesa un array 
//de numere reprezentând ani de naștere obținând vârstele peste 18 ani.

const ani=[
    2000,
    1999,
    1999,
    1980,
    2007,
    2020
]

const majorat=(ani)=>{
    const rezultat=ani.filter(x=>{
        if(2022-x>=18){
            return true;
        }
        return false;
    })
    return rezultat
}

console.log(majorat(ani))