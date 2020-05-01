//Extraer argumentos 
//console.log(process.argv);
//console.log(`Argumentos: ${process.argv[2]}, ${process.argv[3]},${process.argv[4]},`);
var colors = require('colors/safe'); //importa colors
/*
console.log(colors.red("Hola"))
console.log(colors.green("mundo"))
console.log(colors.blue("rgb"))
*/
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //importar las funciones de multiplicar.js

const argv = require("./config/yargs").argv; //Configuracion de yargs

//Asignacion del comando y los argumentos a variables
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

//Switch que determina la operación que se realizará
switch (comando) {
    case 'listar':
        listarTabla(base, limite); //ejecuta la opción listar
        break;
    case 'crear':
        crearArchivo(base, limite) //ejecuta la opción crear
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => console.log(colors.red(err)));
        break;
    default:
        console.log('comando no válido!'); //Salida en caso de error
}