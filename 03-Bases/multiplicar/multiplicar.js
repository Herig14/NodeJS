const fs = require('fs'); //Importa el paquete fs
const colors = require('colors'); //Importa el paquete colors


//Funcion para listar un tabla de multiplicar
let listarTabla = (base, limite = 10) => {
        if (!Number(base)) {
            console.log(`El valor de la base ${base} no es válido!`);
            return;
        }
        console.log("==========================".green);
        console.log(`TABLA DE MULTIPLICAR ${base}`.green);
        console.log("==========================".green);
        //Iteración que imprime cada elemento de la tabla
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base *i}`);
        }
    }
    //Funcion para crear un archivo con una tabla de multiplicar
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        // validar que la base sea un número
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es válido!`);
            return;
        }

        let data = '';
        //Iteración que concatena cada elemento de la tabla
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        //Escribe los elementos de data en un fichero .txt
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err); //Mensaje en caso de error
            else
                resolve(`EL archivo de la tabla del ${base} al ${limite} ha sido guardado!`);
        });
    });
}

module.exports = { //Exporta funciones para usarse en otros scripts
    crearArchivo,
    listarTabla
}