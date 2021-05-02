// Escribir clases

class Tarea {
     constructor(nombre, prioridad) {
          this.nombre = nombre;
          this.prioridad = prioridad;
     }

     mostrar() {
          return `${this.nombre} tiene una prioridad de ${this.prioridad}`
     }
}


// Crear objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta')
let tarea2 = new Tarea('Pasear a Laika', 'Muy alta')
let tarea3 = new Tarea('Conocer a mis suegros', 'Baja')

console.log(tarea1.mostrar())