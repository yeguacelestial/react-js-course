import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  // Un useEffect con el parametro de dependencias vacio solo se ejecuta una vez
  // Tambien se ejecutan en el orden del codigo
  useEffect(() => {
    const obtainLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
      
      setPatients(patientsLocalStorage);
    }

    obtainLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients)); 
  }, [patients])

  const deletePatient = id => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
          <Formulario
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <ListadoPacientes
            patients={patients}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
      </div>
    </div>
  )
}

export default App
