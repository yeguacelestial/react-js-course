const personas = [
     {nombre: 'Juan', edad: 23, aprendiendo: 'JavaScript'},
     {nombre: 'Carlos', edad: 20, aprendiendo: 'Python'},
     {nombre: 'Juana', edad: 21, aprendiendo: 'PHP'},
     {nombre: 'Roberta', edad: 30, aprendiendo: 'Figma'},
     {nombre: 'Felipa', edad: 14, aprendiendo: 'AdobeXD'},
]

// console.log(personas)

// Obtener personas mayores de 20 años
const mayores = personas.filter(persona => {
     return persona.edad > 20
})

console.log(mayores)


// Que aprende Carlos y su edad
const carlos = personas.find(persona => {
     return persona.nombre == 'Carlos'
})

console.log(carlos)


// Sacar la edad promedio
let total = personas.reduce((edadTotal, persona) => {
     return edadTotal + persona.edad
}, 0)

console.log(total / personas.length)