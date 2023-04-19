import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import { useState } from "react";
import Producao from "./componentes/Producao";
import Rodape from "./componentes/Rodape";

function App() {
  const programas = [
    {
      nome: "Filme",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Série",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Anime",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Cartoon",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [producoes, setProducoes] = useState([]);

  const aNovaProducaoAdicionada = (producao) => {
    debugger
    setProducoes([...producoes, producao]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        programas ={programas.map((programa)=>programa.nome)}
        aoVisualCadastrado={(producao) => aNovaProducaoAdicionada(producao)}
      />
      {programas.map((programa) => (
        <Producao
          key={programa.nome}
          nome={programa.nome}
          corPrimaria={programa.corPrimaria}
          corSecundaria={programa.corSecundaria}
          programas = {producoes.filter(producao =>producao.visual === programa.nome)}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
