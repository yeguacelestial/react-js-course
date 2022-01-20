const Paciente = ({ patient, setPatient, deletePatient }) => {
  const { petName, owner, email, date, symptoms, id } = patient

  const handleDeletePatient = () => {
    const response = confirm(`¿Deseas eliminar al paciente ${petName}?`)

    if (response) {
      deletePatient(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{petName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDeletePatient}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
