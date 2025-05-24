import { Pagina, BemVindo, Header, Botao, ItensEsquerda,Container} from './styles.ts';
import Titulo from '../../components/tituloComponent/index.jsx';
import FormularioConsumo from './components/FormularioConsumo/index.jsx';
import RegistroConsumoHoje from './components/RegistrosHoje/index.jsx';
import { useState, useEffect } from "react";
import { listarConsumosDia } from '../../services/api';

function ConsumoDiario() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const carregarRegistros = async () => {
      try {
        const response = await listarConsumosDia("Victor Henrique Sales");
        setRegistros(response.consumos);
      } catch (error) {
        console.error("Erro ao buscar registros:", error);
      }
    };

    carregarRegistros();
  }, []);

  const adicionarRegistroLocal = (novoRegistro) => {
    setRegistros((registrosAntigos) => [...registrosAntigos, novoRegistro]);
  };


  return (
    <Pagina>
      <Header>
        <ItensEsquerda>
          <BemVindo>Olá, Victor Henrique Sales!</BemVindo>
          <p>Como está sua hidratação hoje?</p>
        </ItensEsquerda>

        <Botao>Histórico</Botao>
      </Header>

      <Container>
        <Titulo icone ='Target' titulo='Progresso de Hoje'/>
      </Container>

      <Container>
         <FormularioConsumo onRegistroAdicionado={adicionarRegistroLocal} />
      </Container>

      <Container>
        <RegistroConsumoHoje registros={registros} />
      </Container>



    </Pagina>
  );
}

export default ConsumoDiario;
