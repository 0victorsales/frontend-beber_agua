import { Pagina, FormularioContainer, Label, Input, Botao } from './styles.ts';
import TituloPagina from '../../components/tituloPersonalizado/index.jsx';

function Cadastro() {
  return (
    <Pagina>
      <FormularioContainer>
        <TituloPagina
          titulo="Lembrete de Água"
          subtitulo="Cadastre-se para começar a monitorar seu consumo de água"
          icone="Droplets"
        />

        <div>
          <Label>Nome</Label>
          <Input placeholder="Digite seu nome" />
        </div>

        <div>
          <Label>Peso (kg)</Label>
          <Input placeholder="Digite seu peso" />
        </div>

        <Botao>Começar a Monitorar</Botao>
      </FormularioContainer>
    </Pagina>
  );
}

export default Cadastro;
