import '../css/boton.css';
function Boton({texto, onClick, estiloExtra = ''}){
    return (
        <button className={'boton '+estiloExtra} onClick={onClick}>{texto}</button>
    );
}

export default Boton;