import { Pagina, Header, ItensEsquerda,Container} from './styles.ts';
import FormularioConsumo from './components/FormularioConsumo/index.jsx';
import RegistroConsumoHoje from './components/RegistrosHoje/index.jsx';
import Progresso from './components/ProgressoHoje/index.jsx';
import { useState, useEffect } from "react";
import { listarConsumosDia, obterProgressoHoje  } from '../../services/api';
import BotaoCustomizado from '../../components/botaoPersonalizado/index.jsx';
import TituloPagina from '../../components/tituloPersonalizado/index.jsx';
import { useNavigate } from "react-router-dom";

function ConsumoDiario() {
  const [registros, setRegistros] = useState([]);
  const [progresso, setProgresso] = useState(null);
  const navigate = useNavigate();

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
     
          <TituloPagina
            titulo="Olá, Victor Henrique Sales!"
            subtitulo="Como está sua hidratação hoje?"
            icone="Droplets"
          />

        </ItensEsquerda>

         <div className="botoes-direita">
            <BotaoCustomizado
              icone="History"
              texto="Histórico"
              onClick={() => navigate("/historico")}
            />

            <BotaoCustomizado
              icone="LogOut"  
              texto="Sair"
              onClick={() => navigate("/cadastro")}
            />
          </div>
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
