import logo from './logo.svg';
import './App.css';
import Boton from './components/boton';

function App() {
  const contar = () => {
    console.info('Click');
  }
  return (
    <div className="App">
      <Boton texto='Clic' onClick={contar} />
    </div>
  );
}

export default App;
