const formatString = (s, ...format) => {
    let modified = s;
    for (let i = 0; i < format.length; i++){
        if (modified.indexOf('{' + i + '}') !== -1) {
            modified = modified.replace('{' + i + '}', format[i]);
        }    
    }
    return modified;
}

console.log(formatString("This is a {0} string and we've {1} it", 'nice','formatted'));

//Implementați o funcție de formatare a unui string care suportă parametrii numiți. 
//Exemplu: "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț"

const functie = (s, ...format) => {
    let copie = s;
    for (var i = 0; i < format.length; i++){
        if (copie.indexOf('{substantiv}') !== -1) {
            copie = copie.replace('{substantiv}', format[i]);
        }  
        if (copie.indexOf('{adjectiv}') !== -1) {
            copie = copie.replace('{adjectiv}', format[i+1]);
        }   
    }
    return copie;
}

console.log(functie("un {substantiv} este {adjectiv}", 'căluț' ,'drăguț'));
