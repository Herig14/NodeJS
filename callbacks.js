// setTimeout(() => {
//     console.log("Hola, muchach@s!");
// }, 3000);

//Función con callback
let getUsuarioById = (id, nickname, callback) => {
    let n = nickname + " perez"
    let usuario = {
        nombre: n,
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe!`); //el string se asigna como salida si el id es igual a 20, y la ejecución sigue
    } else {
        callback(null, usuario, 25); //se asignan estos valores como salida si el id no es igual a 20, y la ejecución sigue
    }
}

getUsuarioById(10, 'pepito', (err, usuario, edad) => {
    if (err) {
        return console.log(err); //Si se devuelve un error lo imprime
    }

    console.log("Usuario de la BD:", usuario, `edad: ${edad}`); //Si no ocurre ningún error se imprimen los datos 
});