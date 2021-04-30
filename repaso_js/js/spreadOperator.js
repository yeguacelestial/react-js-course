let lenguajes = ['JavaScript', 'PHP', 'Python']
let frameworks = ['React.js', 'Laravel', 'Django']

// /* Unir arreglos en uno solo */
// let nuevoArreglo = [...lenguajes, ...frameworks]
// console.log(nuevoArreglo)

// /* Obtener ultimo elemento del array 'lenguajes' */
// const [ultimo] = lenguajes.reverse()
// console.log(ultimo)  // Python
// console.log(lenguajes)  // Python, PHP, JavaScript


/* Con Spread operator, no se voltea el array */
let [ultimo] = [...lenguajes].reverse()


// Tambien se puede utilizar al sumar directamente en las funciones con argumentos
function suma(a,b,c){
     console.log(a+b+c)
}

const numeros = [1,2,3]
suma(...numeros)