import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({ patients, setPatient }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen">
      { patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Pacientes
          </h2>

          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
          </p>

          <div className="h-3/5 overflow-y-scroll">
            {patients.map( ( patient, index ) => (
              <Paciente
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
              />
            ))}
          </div> 
        </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>

            <p className="text-lg mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes
