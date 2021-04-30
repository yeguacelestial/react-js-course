const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
     // Pasar la cantidad a la API
     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

     // Llamado a AJAX
     const xhr = new XMLHttpRequest()

     // Abrir la conexion
     xhr.open('GET', api, true)  // true -> llamada asincrona

     // on load
     xhr.onload = () => {
          if (xhr.status == 200) {
               resolve(JSON.parse(xhr.responseText).results)
          } else {
               reject(Error(xhr.statusText))
          }
     }

     // Send - Enviar request a la base de datos
     xhr.send()
})

descargarUsuarios(30)
     .then(
          miembros => imprimirHTML(miembros),
          error => console.error(
               new Error(`Hubo un error: ${error}`)
          )
     )

function imprimirHTML(usuarios) {
     let html = ''
     usuarios.forEach(usuario => {
          html += `
               <li>
                    Nombre: ${usuario.name.first} ${usuario.name.last} - 
                    Edad: ${usuario.dob.age} - 
                    Imagen: <img src="${usuario.picture.medium}"/>
               </li>
          `
     })

     const contenedorApp = document.querySelector('#app')
     contenedorApp.innerHTML = html
}