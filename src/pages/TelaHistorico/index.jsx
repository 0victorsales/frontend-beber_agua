import { Pagina, Header, Container,DetalhesContainer } from './styles.ts';
import TituloPagina from '../../components/tituloPersonalizado/index.jsx';
import { useState, useEffect } from 'react';
import { obterHistoricoDia,obterDiasComRegistros  } from '../../services/api';
import CalendarioCustomizado from './components/calendario/index.jsx';
import Titulo from '../../components/tituloComponent/index.jsx';


function Historico() {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [registrosDia, setRegistrosDia] = useState([]);
  const [progressoDia, setProgressoDia] = useState(null);
  const [diasComRegistros, setDiasComRegistros] = useState([]);

  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const response = await obterHistoricoDia("Victor Henrique Sales", dataSelecionada);
        setRegistrosDia(response.registros);
        setProgressoDia(response.progresso);
      } catch (error) {
        console.error("Erro ao carregar histórico do dia:", error);
      }
    };

     const carregarDiasComRegistros = async () => {
      try {
        const response = await obterDiasComRegistros("Victor Henrique Sales");
        setDiasComRegistros(response.dias);  
      } catch (error) {
        console.error("Erro ao carregar dias com registros:", error);
      }
    };

    carregarDiasComRegistros();
    carregarHistorico();
  }, [dataSelecionada]);

  return (
  <Pagina>
    <Header></Header>

    <Container>
      <div className="calendario-container">
        <div className="calendario-header">
          <TituloPagina
            titulo="Histórico"
            subtitulo="Clique em um dia para ver os detalhes"
            icone="Calendar"
          />
        </div>

        <CalendarioCustomizado
          dadosDias={diasComRegistros}
          onDiaClick={(dateString) => setDataSelecionada(new Date(dateString))}
          dataSelecionada={dataSelecionada.toISOString().split("T")[0]}
        />
      </div>

      <DetalhesContainer>
        {progressoDia && (
          <>
            <Titulo titulo="Hoje" icone="Droplets"/>
            <p>
              {(progressoDia.consumo_total_hoje_ml / 1000).toFixed(1)}L de {progressoDia.meta_litros}L (meta diária)
            </p>
            <p>{progressoDia.percentual_atingido.toFixed(2)}% da meta</p>
            {progressoDia.percentual_atingido >= 100 ? (
              <div className="meta-atingida">Meta atingida!</div>
            ) : (
              <div className="meta-nao-atingida">Meta não atingida</div>
            )}

            <h3>Registros do dia</h3>
            <ul>
              {registrosDia.map((registro, index) => (
                <li key={index}>
                  {registro.consumo_ml} mL às {registro.horario}
                </li>
              ))}
            </ul>
          </>
        )}
      </DetalhesContainer>
    </Container>
  </Pagina>
);

}

export default Historico;