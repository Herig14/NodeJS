let opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
//ejemplo sencillo
/*const argv = require('yargs').argv
console.log(argv.var1, argv.var2, argv.var3)*/
//importa yargs y crea los comandos listar y crear
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc)
    .command('crear', 'Crea un archivo de la tabla de multiplicar', opc)
    .help()
    .argv;


module.exports = { //se exporta argv
    argv
}