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
//Función asíncrona
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) { //condición para resolver o rechazar la promesa
        throw new Error(`No existe un empleado con id ${id}`); //Rechaza la promesa
    } else {
        return empleadoDB; //Resuelve la promesa
    }
}

//Función que devuelve una promesa
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) { //condición para resolver o rechazar la promesa
            reject(`No se encontró salario para el empleado ${empleado.nombre}`); //Rechaza la promesa
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario }); //Resuelve la promesa
        }

    });
}

//Función asincrona
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id); //Pausa la ejecución de la función hasta que la promesa sea resuelta o rechazada
    let resp = await getSalario(empleado); //Pausa la ejecución de la función hasta que la promesa sea resuelta o rechazada
    return `El salario de ${resp.nombre} es de ${resp.salario}`; //Resuelve la promesa
}

//llamada a la función getInformacion
getInformacion(3)
    .then(mensaje => console.log(mensaje)) //imprime un mensaje en caso de resolverse la promesa
    .catch(err => console.log(err)); //imprime un mensaje en caso de rechazarse la promesa