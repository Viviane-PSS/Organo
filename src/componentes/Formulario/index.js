import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const programas = ["Filme", "Série", "Anime", "Cartoon"];

  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [imagem, setImagem] = useState("");
  const [visual, setVisual] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
   
    props.aoVisualCadastrado(
      {titulo,
      ano,
      imagem,
      visual}
    )
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para adicionar uma Produção Visual</h2>
        <CampoTexto
          obrigatorio={true}
          label="Titulo"
          placeholder="Digite o titulo"
          valor={titulo}
          aoAlterado={(valor) => setTitulo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Ano"
          placeholder="Digite o ano de lançamento"
          valor={ano}
          aoAlterado={(valor) => setAno(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa 
          label="Tipo da Produção Visual" 
          itens={programas} 
          valor={visual}
          aoAlterado ={ valor => setVisual(valor)}
        />
        <Botao> Criar Card </Botao>
      </form>
    </section>
  );
};

export default Formulario;
