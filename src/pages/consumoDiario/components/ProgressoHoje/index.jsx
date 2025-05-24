import Titulo from "../../../../components/tituloComponent";
import { ProgressoContainer, ValorTotal, SubInfo, BarraProgresso, InfosExtras } from "./styles.ts";

function Progresso({ progresso }) {

  const totalLitros = (progresso.consumo_total_hoje_ml / 1000).toFixed(1);
  const metaLitros = progresso.meta_litros.toFixed(1);
  const litrosRestantes = progresso.litros_faltantes.toFixed(1);
  const percentual = progresso.percentual_atingido.toFixed(1);


  return (
    <ProgressoContainer>
      <Titulo icone="Target" titulo="Progresso de Hoje" />

      <ValorTotal>{totalLitros}L</ValorTotal>
      <SubInfo>de {metaLitros}L (meta diária)</SubInfo>

      <BarraProgresso>
        <div style={{ width: `${percentual > 100 ? 100 : percentual}%` }} />
      </BarraProgresso>

      <InfosExtras>
        <div>
          <strong>{litrosRestantes}L</strong>
          <p>Restante</p>
        </div>
        <div>
          <strong>{percentual}%</strong>
          <p>da meta</p>
        </div>
      </InfosExtras>
    </ProgressoContainer>
  );
}

export default Progresso;