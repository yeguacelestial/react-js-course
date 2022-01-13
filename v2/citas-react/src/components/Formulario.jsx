import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ patients, setPatients }) => {
  const [petName, setPetName] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const [formError, setFormError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const dateNow = Date.now().toString()

    return random + dateNow
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Form validation
    if ([petName, owner, email, date, symptoms].includes('')) {
      
      console.log('Hay campos vacios')
      setFormError(true)
    
    } else {
      
      console.log('Todos los campos estan llenos')
      setFormError(false)
      
      // Objeto de paciente
      const patient = {
        id: generarId(),
        petName,
        owner,
        email,
        date,
        symptoms
      }

      setPatients([...patients, patient])

      // Reiniciar el formulario
      setPetName('')
      setOwner('')
      setEmail('')
      setDate('')
      setSymptoms('')
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {
          formError && <Error>
            Todos los campos son obligatorios
          </Error>
        }
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo electrónico
          </label>

          <input
            id="email"
            type="email"
            placeholder="Correo del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Agregar paciente"
        />
      </form>
    </div>
  )
}

export default Formulario
