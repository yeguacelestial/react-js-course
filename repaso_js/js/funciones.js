/* Function declaration */

// saludar('Carlos')

function saludar(nombre){
     console.log(`Bienvenido: ${nombre}`);
}

/* Function expression */
const cliente = function(nombre){
     console.log(`Mostrando datos de: ${nombre}`)
}
// cliente('Carlos')


/* Funciones con parametros */
const actividad = function(nombre='Walter White', actividad='Enseñar quimica'){
     console.log(`La persona ${nombre} está realizando la actividad ${actividad}`)
}
// actividad('Antonio')

/* Arrow functions */
let viajando = destino => `Viajando a la ciudad de: ${destino}`

let viaje
viaje = viajando('Paris')

console.log(viaje)