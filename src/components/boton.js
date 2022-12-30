import '../css/boton.css';
function Boton({texto, onClick}){
    return (
        <button onClick={onClick}>{texto}</button>
    );
}

export default Boton;