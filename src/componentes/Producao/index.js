import Programa from "../Programa";
import "./Producao.css";

const Producao = (props) => {
  const css = { backgroundColor: props.corSecundaria };

  return (
    (props.programas.length> 0 )&& <section className="producao" style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="programas">
        {props.programas.map((programa) => (
          <Programa
            corFundo={props.corPrimaria}
            titulo={programa.titulo}
            ano={programa.ano}
            imagem={programa.imagem}
            key={programa.titulo}
          />
        ))}
      </div>
    </section>
  );
};

export default Producao;
