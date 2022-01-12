const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">Carlos</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
        <span className="font-normal normal-case">10 de diciembre del 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum fugiat libero placeat ut architecto debitis perspiciatis atque adipisci? Ut voluptas nam quasi omnis quod deserunt corporis neque doloribus quam fugit!</span>
      </p>
    </div>
  )
}

export default Paciente
