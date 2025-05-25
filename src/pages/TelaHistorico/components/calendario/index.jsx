import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  CalendarioContainer,
  CalendarioHeader,
  CalendarioDiasSemana,
  CalendarioDias,
} from "./styles.ts";

function CalendarioCustomizado({ dadosDias, onDiaClick, dataSelecionada }) {
  const [dataAtual, setDataAtual] = useState(new Date());

  const nomesMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();

  const primeiroDiaDoMes = new Date(ano, mes, 1);
  const dataInicial = new Date(primeiroDiaDoMes);
  dataInicial.setDate(dataInicial.getDate() - primeiroDiaDoMes.getDay());

  const diasCalendario = [];
  const dataIteracao = new Date(dataInicial);

  for (let i = 0; i < 42; i++) {
    diasCalendario.push(new Date(dataIteracao));
    dataIteracao.setDate(dataIteracao.getDate() + 1);
  }

  const irParaMesAnterior = () => {
    setDataAtual(new Date(ano, mes - 1, 1));
  };

  const irParaProximoMes = () => {
    setDataAtual(new Date(ano, mes + 1, 1));
  };

  const formatarDataParaString = (data) => {
    return data.toISOString().split("T")[0];
  };

  const obterRegistroDoDia = (data) => {
    const dataFormatada = formatarDataParaString(data);
    return dadosDias.find((registro) => registro.data === dataFormatada);
  };

  const verificarSeEhHoje = (data) => {
    const hoje = new Date();
    return data.toDateString() === hoje.toDateString();
  };

  const verificarSeEhDoMesAtual = (data) => {
    return data.getMonth() === mes;
  };

  const verificarSeEhSelecionado = (data) => {
    return dataSelecionada === formatarDataParaString(data);
  };

  return (
    <CalendarioContainer>
      <CalendarioHeader>
        <button onClick={irParaMesAnterior}>
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h2 className="titulo-mes">
          {nomesMeses[mes]} {ano}
        </h2>
        <button onClick={irParaProximoMes}>
          <ChevronRight className="w-4 h-4" />
        </button>
      </CalendarioHeader>

      <CalendarioDiasSemana>
        {nomesDias.map((dia) => (
          <div key={dia} className="dia-semana">
            {dia}
          </div>
        ))}
      </CalendarioDiasSemana>

      <CalendarioDias>
        {diasCalendario.map((data, index) => {
          const registroDoDia = obterRegistroDoDia(data);
          const temRegistro = !!registroDoDia;
          const objetivoAtingido = registroDoDia?.objetivoAlcancado || false;
          const ehDiaDoMesAtual = verificarSeEhDoMesAtual(data);
          const ehHoje = verificarSeEhHoje(data);
          const ehSelecionado = verificarSeEhSelecionado(data);

          return (
            <button
              key={index}
              onClick={() => onDiaClick(formatarDataParaString(data))}
              className={`
                ${ehDiaDoMesAtual ? "text-gray-800" : "text-gray-400"}
                ${ehHoje ? "ring-2 ring-blue-500" : ""}
                ${ehSelecionado ? "bg-blue-100 text-blue-800" : "hover:bg-gray-50"}
                ${temRegistro && !ehSelecionado ? (objetivoAtingido ? "bg-green-50 text-green-800" : "bg-blue-50 text-blue-800") : ""}
              `}
            >
              <span className="relative z-10">{data.getDate()}</span>

              {temRegistro && (
                <div
                  className={`
                    absolute top-1 right-1 w-2 h-2 rounded-full
                    ${objetivoAtingido ? "bg-green-500" : "bg-blue-500"}
                  `}
                />
              )}
            </button>
          );
        })}
      </CalendarioDias>
    </CalendarioContainer>
  );
}

export default CalendarioCustomizado;
