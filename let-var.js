let nombre = "Wolverine"; //Declaración de variable nombre como tipo let
var nombre2 = "Xavier" //Declaración de variable nombre2 como tipo var
if (true) {
    let nombre = "Magneto"; //Declaración de variable nombre dentro de la sentencia If con tipo let
    var nombre2 = "Profesor X" //Declaración de variable nombre2 dentro de la sentencia If con tipo var
}

console.log(`hola ${nombre}`); //Se imprime 'Wolverine', porque está afuera del if
console.log(`Buenos días ${nombre2}`); //Se imprime 'Profesor X', porque la variable var se redefine dentro del if



let i; // Se declara la variable i como tipo let
for (let i = 0; i <= 5; i++) {
    console.log(`i = ${i}`);
}

var i2; // Se declara la variable i como tipo var
for (var i2 = 0; i2 <= 5; i2++) {
    console.log(`i2 = ${i2}`);
}

console.log(`valor final de i: ${i}`); //Se imprime undefined, porque la variable tipo let del for no influye en la de afuera
console.log(`valor final de i2: ${i2}`); //Se imprime 6, porque la variable tipo var del for redefine a la de afuera