//Creación objeto deadpool
let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

// Opcion 1:
console.log(deadpool.getNombre());
//Asignación de variables una por una
let nom = deadpool.nombre;
let ape = deadpool.apellido;
let pod = deadpool.poder;

// Opción 2: destructuracion
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);