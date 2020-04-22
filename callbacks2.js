//Array de objetos empleados
let empleados = [{
        id: 1,
        nombre: "Santiago"
    },
    {
        id: 2,
        nombre: "Wendy"
    },
    {
        id: 3,
        nombre: "Leo"
    }
];
//array de objetos sueldos
let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];
//Función con callback, recibe un id y devuelve un objeto empleado
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

//Función con callback, recibe un objeto empleado y devuelve un objeto {nombre,salario}
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }
}

//Llamada a la función getEmpleado
getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err); //Imprime el error devuelto por el callbak y sale de la función
    }
    //Llamada a la función getSalario con el objeto devuelto por el callback de getEmpleado
    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err); //Imprime el error devuelto por el callbak y sale de la función
        }

        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`); //Imprime  datos devueltos por el callback
    })

});