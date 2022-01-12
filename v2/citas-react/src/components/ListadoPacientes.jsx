import Paciente from "./Paciente"

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen">
      <h2 className="font-black text-3xl text-center">
        Listado Pacientes
      </h2>

      <p className="text-lg mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">pacientes y citas</span>
      </p>

      <div className="h-3/5 overflow-y-scroll">
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
      </div>
    </div>
  )
}

export default ListadoPacientes
