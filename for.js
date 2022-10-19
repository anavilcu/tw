function occurences(text, character){
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e"));

function occurences2(text, character){
    return text.split(character).length - 1;
}


console.log(occurences2("sample text", "e"));

let occurences3 = (text, character) => text.split(character).length - 1;

console.log(occurences3("sample text", "e"));