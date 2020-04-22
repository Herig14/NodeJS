/**
 * Pruebas de async y await
 */

// let getNombre = async() => {
//     throw new Error("No existe el usuario en BD");
//     return "Rodrigo";
// }

//Función que devuelve una promesa
let getNombre = () => {
        return new Promise((resolve, reject) => {
            //Función con tiempo de espera antes de ejecutarse
            setTimeout(() => {
                resolve("Herig");
            }, 3000);
            // reject("Error al consultar el nombre");
        });
    }
    //Función asíncrona
let saludo = async() => {
        let nombre = await getNombre(); ////Pausa la ejecución de la función hasta que la promesa sea resuelta o rechazada
        return `Hola ${nombre}`; //Resuelve la promesa
    }
    //llamada a la función saludo
saludo().then(mensaje => {
    console.log(mensaje); //imprime un mensaje en caso de resolverse la promesa
}).catch(err => {
    console.log("Error en el Saludo:", err); //imprime un mensaje en caso de rechazarse la promesa
});

// console.log(getNombre());

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log("Error en el ASYNC:", err);
// });