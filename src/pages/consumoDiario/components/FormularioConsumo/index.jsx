import { InputQuantidade,BotaoAdicionar } from './styles.ts';
import OpcaoBotaoML from '../BotoesML/index.jsx';
import { defaultOptions } from './OptionsML.ts';
function FormularioConsumo() {


 const registerByButtonML = (e) => {
     registerML(e.target.value)
  };

  const registerML = (ml) => {
    console.log('registerByButtonML ',ml);
  };
 
 

  return (
    <div>
        <p>Registrar Consumo</p>
        <div>
          <InputQuantidade type="number" placeholder="Quantidade em mL" />
          <BotaoAdicionar onClick={registerML}>Adicionar</BotaoAdicionar>
        </div>
        <p>Quantidades rápidas:</p>
        <OpcaoBotaoML opcoes={defaultOptions} onClicked={registerByButtonML}/>
    </div>
  );
}

export default FormularioConsumo;