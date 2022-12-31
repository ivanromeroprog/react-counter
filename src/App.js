
import { useState } from 'react';
import './App.css';
import Boton from './components/boton';
import Contador from './components/contador';

function App() {

  //Hooks
  const [valor, setValor] = useState(5);

  //Events
  const contar = () => {
    setValor(valor+1);
  }

  const reiniciar = () => {
    setValor(0);
  }

  return (
    <div className="App">
      <Contador valor={valor} />
      <div className='contenedor'>
        <Boton texto='Clic' onClick={contar} />
        <Boton texto='Reiniciar' onClick={reiniciar} />
      </div>
    </div>
  );
}

export default App;
