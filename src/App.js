import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
import { useState } from "react";


function App() {

  const [producoes, setProducoes] = useState([]);

  const aNovaProducaoAdicionada = (producao) => {
    console.log(producao);
    setProducoes([...producoes, producao])
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoVisualCadastrado={producao => aNovaProducaoAdicionada(producao)}/>
      
    </div>
  );
}

export default App;
