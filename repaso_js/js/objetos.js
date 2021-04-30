// Object literal
const persona = {
     nombre: 'Juan',
     profesion: 'Desarrollador web',
     edad: 500
}

const persona2 = {
     nombre: 'Carlos',
     profesion: 'Hacker',
     edad: 22
}

// console.log(persona)
// console.log(persona2)


// Object constructor
function Tarea(nombre, urgencia){
     this.nombre = nombre
     this.urgencia = urgencia
}

// Agregar prototype a Tarea
Tarea.prototype.mostrarInformacionTarea = function(){
     return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente')
const tarea2 = new Tarea('Pasear a Laika', 'Urgente')

console.log(tarea1.mostrarInformacionTarea())
console.log(tarea2.mostrarInformacionTarea())

// console.log(tarea1)
// console.log(tarea2)