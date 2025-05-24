import { Pagina, BemVindo, Header, Botao, ItensEsquerda,Container} from './styles.ts';
 
import FormularioConsumo from './components/FormularioConsumo/index.jsx';

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
        <p>Progresso de Hoje</p>
      </Container>

      <Container>
         <FormularioConsumo/>
      </Container>



    </Pagina>
  );
}

export default ConsumoDiario;
