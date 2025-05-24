import { InputQuantidade,BotaoAdicionar } from './styles.ts';
import OpcaoBotaoML from '../BotoesML/index.jsx';
import { defaultOptions } from './OptionsML.ts';
import { inserirConsumo } from '../../../../services/api.js';
import { useState } from 'react';
import Titulo from '../../../../components/tituloComponent/index.jsx'

function FormularioConsumo() {
  const [quantidade, setQuantidade] = useState("");


 const registerByButtonML = (e) => {
     registerML(e.target.value)
  };

  const registerML = async (ml) => {
    const quantidadeML = ml || quantidade;
    if (!quantidadeML) {
      alert("Digite uma quantidade!");
      return;
    }

    try {
      const resposta = await inserirConsumo("Victor Henrique Sales", Number(quantidadeML));
      console.log("Resposta do backend:", resposta);
      alert("Consumo registrado com sucesso!");
      setQuantidade("");  
    } catch (error) {
      alert("Erro ao registrar consumo. Veja o console para mais detalhes!");
    }
  };

 
 

  return (
    <div>
        <Titulo icone ='Plus' titulo='Registrar Consumo'/>
        <div>
          <InputQuantidade 
            type="number" 
            placeholder="Quantidade em mL" 
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            />
          <BotaoAdicionar onClick={() => registerML(quantidade)}>Adicionar</BotaoAdicionar>
        </div>
        <p>Quantidades rápidas:</p>
        <OpcaoBotaoML opcoes={defaultOptions} onClicked={registerByButtonML}/>
    </div>
  );
}

export default FormularioConsumo;