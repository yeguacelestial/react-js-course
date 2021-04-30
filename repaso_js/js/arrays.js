const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

console.log(carrito)

const appContenedor = document.querySelector('#app')

let html = ''

/* forEach */

carrito.forEach(producto => {
     html += `<li>${producto}</li>`
})

appContenedor.innerHTML = html

/* .map - A diferencia del forEach, map guarda una copia del arreglo */
carrito.map(producto => {
     return `El producto es ${producto}`
})


/* Object.keys - Sirve para sacar las llaves de un objeto */
const persona = {
     nombre: 'Juan',
     profesion: 'Desarrollador web',
     edad: 500
}

console.log(Object.keys(persona))