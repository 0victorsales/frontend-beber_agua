import { Pagina, FormularioContainer, Label, Input, Botao } from './styles.ts';
import TituloPagina from '../../components/tituloPersonalizado/index.jsx';
import { useState } from "react";
import { registrarMeta } from "../../services/api";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await registrarMeta(nome, parseFloat(peso));

      if (resposta && resposta.mensagem && resposta.dados) {
        localStorage.setItem("usuario_id", resposta.dados.id);
        localStorage.setItem("nome_usuario", resposta.dados.nome_usuario);

        alert("Meta registrada com sucesso!");
        window.location.href = "/consumo-diario";

      } else {
        alert("Erro inesperado.");
      }
    } catch (error) {
      console.error("Erro ao registrar meta:", error);
      alert("Erro ao registrar meta.");
    }
  };

  return (
    <Pagina>
      <FormularioContainer>
        <TituloPagina
          titulo="Lembrete de Água"
          subtitulo="Cadastre-se para começar a monitorar seu consumo de água"
          icone="Droplets"
        />
        
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          <div>
            <Label>Nome</Label>
            <Input
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div>
            <Label>Peso (kg)</Label>
            <Input
              placeholder="Digite seu peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <Botao type="submit">Começar a Monitorar</Botao>
        </form>
      </FormularioContainer>
    </Pagina>
  );
}

export default Cadastro;
