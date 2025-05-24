import { InputQuantidade,BotaoAdicionar } from './styles.ts';
import OpcaoBotaoML from '../BotoesML/index.jsx';
import { defaultOptions } from './OptionsML.ts';
import { inserirConsumo } from '../../../../services/api.js';
import { useState } from 'react';
import Titulo from '../../../../components/tituloComponent/index.jsx'

function FormularioConsumo({ onRegistroAdicionado }) {
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

      const horarioCompleto = resposta.dados.horario;
      const horarioFormatado = horarioCompleto.substring(0, 5);
      const novoRegistro = {
        consumo_ml: resposta.dados.consumo_ml,
        horario: horarioFormatado
      };
      onRegistroAdicionado(novoRegistro,resposta.dados);

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