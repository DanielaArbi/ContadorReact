import '../styles/Boton.css';
//poner en corchetes los parametros recibidos
//se llama desestructuracion
function Boton ({ texto , esBotonDeClic, manejarClic }){
    return(
      <button 
        className={ esBotonDeClic ? 'boton-clic' :'boton-reiniciar' }
        onClick = {manejarClic} >
        {texto}
      </button>
    );
}

export default Boton;