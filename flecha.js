// Forma habitual
/*  function sumar(a, b) {
     return a + b;
} */

let sumar = (a, b) => a + b; //declaración de una función flecha

console.log(`la suma de 3 + 4 = ${sumar(3,4)}`); //Comprobación de la función

//Forma habitual
function saludar() {
    return "Hola chic@s";
}

//Función flecha
let saludo = () => {
    let a = "Hola";
    let b = 'Chicos';
    return `${a} ${b}`;
}

console.log(`${saludo()}`); //Imprime el resultado de la función flecha saludo

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: () => `${deadpool.nombre} ${deadpool.apellido} - poder: ${deadpool.poder}` //Otro ejemplo de uso
}

console.log(deadpool.getNombre()); //Imprime el resultado de la función flecha getNombre() del objeto deadpool