function traducirAIdiomaP(frase) {
    const vocales = 'aeiouáéíóú';
    let resultado = '';
    for (let letra of frase) {
        if (vocales.includes(letra.toLowerCase())) {
            resultado += letra.toLowerCase() + 'p' + letra.toLowerCase();
        } else {
            resultado += letra;
        }
    }
    return resultado;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Ingrese la frase a traducir a Idioma P: ", (frase) => {
    
    const fraseIdiomaP = traducirAIdiomaP(frase);
    
    
    console.log("Frase en Idioma P:", fraseIdiomaP);

    
    readline.close();
});