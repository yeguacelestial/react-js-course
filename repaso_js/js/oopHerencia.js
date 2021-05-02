export const nombreTarea = 'Pasear a Laika'

export const tareaCompletada = () => {
     console.log('La tarea se completó.')
}

class Tarea {
     constructor(nombre, prioridad) {
          this.nombre = nombre;
          this.prioridad = prioridad;
     }

     mostrar() {
          console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
     }
}

export class ComprasPendientes extends Tarea {
     constructor(nombre, prioridad, cantidad) {
          super(nombre, prioridad);
          this.cantidad = cantidad;
     }

     mostrar() {
          super.mostrar();
          console.log(`y la cantidad es de ${this.cantidad}`)
     }

     hola() {
          return 'Hola'
     }
}

// Crear objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta')
let tarea2 = new Tarea('Pasear a Laika', 'Muy alta')
let tarea3 = new Tarea('Conocer a mis suegros', 'Baja')

// console.log(tarea1.mostrar())

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3)
// compra1.mostrar()
// console.log(compra1.hola())