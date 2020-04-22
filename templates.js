let nombre = "Deadpool"; //String con doble comilla
let real = 'Wade Wilson'; //String con comilla simple

console.log(nombre + " " + real); //Concatenación de strings tradicional
console.log(`${nombre} ${real}`); //concatenación con tildes invertidas

let nombreCompleto = nombre + " " + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto === nombreTemplate); //Compara el contenido y el tipo de una variable con otra

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre es: ${getNombre()}`);