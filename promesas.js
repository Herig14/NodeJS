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

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

let getEmpleado = (id) => {
    //la función getEmpleado devuelve una promesa
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            // En caso de no encontrarse el empleado la promesa se rechaza y devuelve un mensaje
            reject(`No existe un empleado con id ${id}`);
        } else {
            // En caso de  encontrarse el empleado la promesa se resulve y devuelve un objeto empleado
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            //Si el empleado no tiene salario se rechaza la promesa y devuelve un mensaje
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            //Si el empleado  tiene salario se resuelve la promesa y devuelve un objeto{nombre,salario}
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}

// Consulta: Async y Await
// getEmpleado(3).then(empleado => {
//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
//     }, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });

// Promesas en cadena
//Llamada a la función getEmpleado 
getEmpleado(20).then(empleado => {
    return getSalario(empleado); //Llamada a la función y retorno de la promesa
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`); //se resuelve la promesa
}).catch(err => {
    console.log(err); //se rechaza la promesa
});