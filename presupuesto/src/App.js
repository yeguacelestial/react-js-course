import logo from './logo.svg';
import './App.css';
import Pregunta from './components/Pregunta';

function App() {
  return (
    <div className="container">
      <h1>Gasto Semanal</h1>

      <div className="contenido-principal contenido">
        <Pregunta/>
      </div>
    </div>
  );
}

export default App;
