import { Pagina, BemVindo, Header, Botao, ItensEsquerda,Container} from './styles.ts';
import FormularioConsumo from './components/FormularioConsumo/index.jsx';
import RegistroConsumoHoje from './components/RegistrosHoje/index.jsx';
import Progresso from './components/ProgressoHoje/index.jsx';
import { useState, useEffect } from "react";
import { listarConsumosDia, obterProgressoHoje  } from '../../services/api';

function ConsumoDiario() {
  const [registros, setRegistros] = useState([]);
  const [progresso, setProgresso] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [resProgresso, resRegistros] = await Promise.all([
          obterProgressoHoje("Victor Henrique Sales"),
          listarConsumosDia("Victor Henrique Sales")
        ]);

        setProgresso(resProgresso.dados);
        setRegistros(resRegistros.consumos);
      } catch (error) {
        console.error("Erro ao buscar dados iniciais:", error);
      }
    };

    carregarDados();
  }, []);

  const adicionarRegistroLocal = (novoRegistro,progressoAtualizado) => {
    setRegistros((registrosAntigos) => [...registrosAntigos, novoRegistro]);
    setProgresso(progressoAtualizado); 
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
        {progresso && <Progresso progresso={progresso} />}
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
