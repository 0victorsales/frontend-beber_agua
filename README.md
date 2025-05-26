# Projeto React.js - Consumo Diário

Este é um projeto **React.js** que permite aos usuários registrar seu consumo diário de água, acompanhar o progresso e consultar registros detalhados. Ele utiliza componentes reutilizáveis e integração com um backend para gerenciar dados.

 

## Página de Consumo Diário (`pages/consumoDiario/index.jsx`)

Esta página é o ponto principal de visualização do progresso e inserção de consumo.

- **useEffect**: Carrega dados iniciais de progresso e registros.
- **adicionarRegistroLocal**: Atualiza a lista de registros localmente e o progresso após novo registro.
- **Botões**:
  - **Histórico**: Navega para a tela de histórico.
  - **Sair**: Navega para a tela de cadastro.

## Integração com Backend (services/api.js)
- listarConsumosDia

- obterProgressoHoje

- inserirConsumo


# Componentes Locais
## Botões de ML (BotoesML/index.jsx)
- Renderiza botões rápidos de ml para facilitar inserções no consumo.

## Formulário de Consumo (FormularioConsumo/index.jsx)
- Função registerML: Envia dados ao backend.

- registerByButtonML: Atalho para envio pelos botões rápidos.

- Props: onRegistroAdicionado - callback para atualizar lista de registros.

## Progresso do Dia (ProgressoHoje/index.jsx)
- Consumo total

- Meta do dia

- Litros restantes

- Porcentagem da meta atingida



#  Componentes Globais
- BotaoCustomizado: Botão reutilizável com ícone e texto.

- TituloPagina: Exibe título e subtítulo, utilizado no topo das telas.

- Titulo: Componente de título com ícone para uso em seções menores.



# Tela de Cadastro
A tela de **Cadastro** permite que o usuário registre seu nome e peso, enviando os dados para o backend que calcula automaticamente a meta de consumo de água com base nesses dados. Após o cadastro, os dados são salvos localmente no navegador e o usuário é redirecionado para a página de consumo diário.


# Tela de Histórico
A tela **Histórico** permite que o usuário visualize os registros de consumo de água em cada dia. Utiliza um componente de calendário customizado para selecionar a data e exibe detalhes como o total de litros consumidos, meta, percentual atingido e registros individuais.

## Estados
- dataSelecionada: Data atual selecionada.

- registrosDia: Lista dos consumos do dia.

- progressoDia: Detalhes do progresso.

- diasComRegistros: Dias que têm registros no banco.

- nomeUsuario: Recuperado do localStorage.

##  Lógica de carregamento
- useEffect: Executa toda vez que dataSelecionada ou nomeUsuario mudam.

## Chama as funções
- carregarHistorico: Busca dados de consumo e progresso para o dia selecionado.

- carregarDiasComRegistros: Obtém os dias que têm registros para colorir no calendário.


## Componentes Utilizados
### TituloPagina
- Exibe o título da página (“Histórico”) e um subtítulo explicativo.

### CalendarioCustomizado
- Componente de calendário personalizado, usado para selecionar o dia.

### Titulo
- Usado na lateral direita para exibir o título “Hoje” com ícone.

## Componente CalendarioCustomizado

### Estados
- dataAtual: Mês e ano atual do calendário.

### Funções
- irParaMesAnterior / irParaProximoMes: Navega entre os meses.

- formatarDataParaString: Formata a data em YYYY-MM-DD.

- obterRegistroDoDia: Verifica se há registro para um dia específico.

### Verificações
- verificarSeEhHoje: Se o dia é o atual.

- verificarSeEhDoMesAtual: Se o dia faz parte do mês em exibição.

- verificarSeEhSelecionado: Se o dia é o selecionado.

# Tecnologias e Bibliotecas
- React.js

- Styled-components: para estilos modularizados.

- React Router: para navegação entre páginas.

- Axios: para comunicação com o backend.