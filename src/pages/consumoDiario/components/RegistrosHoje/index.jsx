import Titulo from "../../../../components/tituloComponent";
import { listarConsumosDia } from "../../../../services/api";
import { useEffect, useState } from "react";

import { ListaRegistros, RegistroHoje } from "./styles.ts";

function RegistroConsumoHoje() {

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await listarConsumosDia("Victor Henrique Sales");
        setRegistros(response.consumos);
      } catch (error) {
        console.error("Erro ao buscar registros:", error);
      }
    };

    fetchRegistros();
  }, []);

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