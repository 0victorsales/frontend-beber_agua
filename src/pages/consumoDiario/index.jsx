import { Pagina, BemVindo, Header, Botao, ItensEsquerda,Container} from './styles.ts';
import Titulo from '../../components/tituloComponent/index.jsx';
import FormularioConsumo from './components/FormularioConsumo/index.jsx';
import RegistroConsumoHoje from './components/RegistrosHoje/index.jsx';

function ConsumoDiario() {

  



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
         <FormularioConsumo/>
      </Container>

      <Container>
        <RegistroConsumoHoje/>
      </Container>



    </Pagina>
  );
}

export default ConsumoDiario;
