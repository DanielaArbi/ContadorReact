import './App.css';
import Arbi from './img/arbi-5.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import {useState} from 'react'; //hooks


function App() {

  //declaro una constante que es un arreglo
  //la primera es mi estado y el otro es la funcion que me permite actualizar el primero
 const [numClics,setNumClics] = useState(0);

  const manejarClic = ()=>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = ()=>{
    setNumClics(0);
  };
  

  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-log'
      src={Arbi}
      alt='Logo de freeCodeCamp'/>
     </div>
     <div className='contenedor-principal'>
        <Contador 
        numClics= {numClics}/>
         <Boton 
         texto = 'click'
         esBotonDeClic ={true} 
         manejarClic = {manejarClic} />
         <Boton 
         texto = 'Reiniciar'
         esBotonDeClic ={false} 
         manejarClic = {reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
