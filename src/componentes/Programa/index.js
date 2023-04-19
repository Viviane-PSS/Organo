import "./Programa.css"

const Programa = ({titulo, imagem, ano, corFundo}) =>{
    return(
        <div className="programa">
            <div className="cabecalho" style={{backgroundColor:corFundo}}>
                <img src={imagem} alt={ titulo}/>
            </div>
            <div className="rodape">
                <h4>{titulo}</h4>
                <h5>{ano}</h5>
            </div>
        </div>
    );
}

export default Programa;