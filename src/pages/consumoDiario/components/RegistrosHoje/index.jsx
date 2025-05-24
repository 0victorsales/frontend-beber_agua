import Titulo from "../../../../components/tituloComponent";
import { ListaRegistros, RegistroHoje } from "./styles.ts";

function RegistroConsumoHoje({registros}) {


  return (
    <div>
      <Titulo icone="TrendingUp" titulo="Registros de Hoje" />
      <ListaRegistros>
        {registros.map((registro, index) => (
          <RegistroHoje key={index}>
            <span>{registro.consumo_ml} mL</span>
            <span>{registro.horario}</span>
          </RegistroHoje>
        ))}
      </ListaRegistros>
    </div>
  );
}

export default RegistroConsumoHoje;