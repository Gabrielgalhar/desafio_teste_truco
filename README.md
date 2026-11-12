# Truco Paulista — Jogo para Duas Duplas

**Colaborador:** Gabriel Galhardone Felipe

**Identificação acadêmica:**  
**Nome:** Gabriel Galhardone Felipe  
**RA:** 24021292-2  
**Turma:** ESOFT6SB

## Sobre o projeto

Este projeto foi desenvolvido para o desafio de testes de software envolvendo a implementação e validação da lógica do **Truco Paulista**, utilizando JavaScript.

O sistema representa uma partida com **quatro jogadores divididos em duas duplas**:

- **Dupla 0:** jogadores 0 e 2
- **Dupla 1:** jogadores 1 e 3

A partida é disputada até que uma das duplas alcance **12 pontos**. Cada mão possui até três vazas e cada jogador recebe três cartas.

O projeto possui foco na implementação da regra do jogo e na criação de testes automatizados. Não foi desenvolvida uma interface gráfica, pois o objetivo principal é validar o funcionamento do motor através dos testes em JavaScript.

## Regras implementadas

A implementação contempla as principais regras do Truco Paulista, incluindo:

- Baralho com 40 cartas;
- Exclusão das cartas 8, 9 e 10;
- Hierarquia normal das cartas;
- Definição das manilhas através da carta vira;
- Ordem de força dos naipes das manilhas:
  - Ouros;
  - Espadas;
  - Copas;
  - Paus;
- Distribuição de três cartas para cada jogador;
- Controle da vez de cada jogador;
- Validação das cartas utilizadas;
- Resolução das vazas;
- Critérios de desempate;
- Finalização da mão após duas vazas vencidas;
- Pedido de Truco;
- Escalada de pontos para 3, 6, 9 e 12;
- Recusa do pedido de Truco;
- Regras para mão de onze;
- Mão de ferro;
- Controle da pontuação das duplas;
- Encerramento da partida ao atingir 12 pontos.

A lógica também impede que uma mesma dupla faça uma nova elevação do próprio pedido aceito e controla se o jogador está autorizado a realizar determinada ação em seu turno.

## Mão de onze e mão de ferro

Quando uma dupla alcança 11 pontos, existe uma decisão especial antes da continuação da partida.

A equipe pode aceitar jogar a mão valendo três pontos ou recusar, concedendo um ponto à dupla adversária.

Quando as duas equipes possuem 11 pontos, é iniciada a chamada **mão de ferro**. Nessa situação, as cartas e o vira ficam ocultos nas consultas de estado e não é permitido realizar pedido de Truco.

O motor mantém internamente as informações necessárias para que as cartas ocultas continuem sendo utilizadas corretamente durante a partida.

## Estrutura do projeto

A organização principal do projeto é:

```text
desafio_teste_truco_gabriel/
│
├── src/
│   └── truco.js
│
├── test/
│   └── truco.test.js
│
├── evidencias/
│   ├── testes.log
│   └── cobertura.log
│
├── package.json
└── README.md
```

O arquivo `src/truco.js` contém a implementação do motor do jogo.

Os testes automatizados ficam em `test/truco.test.js`.

A pasta `evidencias` é utilizada para armazenar os resultados obtidos durante a execução dos testes e da cobertura.

## Como executar

### Requisitos

Para executar o projeto é necessário possuir:

- Node.js 22 ou superior;
- npm.

O projeto não utiliza bibliotecas externas obrigatórias, portanto não é necessário instalar dependências adicionais para executar os testes.

### Executar os testes

Dentro da pasta do projeto, execute:

```bash
npm test
```

Esse comando executa os testes utilizando os recursos nativos de testes do Node.js.

### Executar os testes com cobertura

Para executar os testes juntamente com o relatório de cobertura:

```bash
npm run coverage
```

A execução permite verificar a quantidade de testes aprovados e também os percentuais de cobertura do código.

## Exemplo básico

A utilização do motor pode ser feita através da classe `Truco`:

```javascript
import { Truco } from './src/truco.js';

const jogo = new Truco();

jogo.iniciarMao();

jogo.pedirTruco(0);

jogo.responderTruco(1, true);

console.log(jogo.estado.valor);

jogo.jogar(0, 0);
```

O exemplo representa a criação de uma partida, o início de uma mão, um pedido de Truco, a aceitação do pedido e a utilização de uma carta pelo jogador.

## Testes automatizados

Foram criados **22 casos de teste** para verificar diferentes partes da lógica do jogo.

Cada cenário utiliza uma partida independente e verifica o resultado esperado da operação realizada. Quando uma operação deve ser recusada, o teste verifica se o sistema realmente gera a exceção esperada.

Os testes também verificam situações em que o estado da partida não deve ser alterado após uma operação inválida.

### Casos de teste

| Caso | Validação realizada |
|---|---|
| CT01 | Verifica se o baralho possui 40 cartas e não contém 8, 9 e 10 |
| CT02 | Confere a sequência normal de força das cartas |
| CT03 | Verifica a definição da manilha a partir do vira |
| CT04 | Valida a hierarquia dos naipes das manilhas |
| CT05 | Rejeita carta ou vaza inválida |
| CT06 | Verifica vencedor, empate e desempate entre jogadores |
| CT07 | Confirma o encerramento da mão após duas vazas |
| CT08 | Testa os critérios de desempate das vazas |
| CT09 | Confere a distribuição de cartas e definição do vira |
| CT10 | Impede distribuição repetida e início indevido de uma mão |
| CT11 | Valida o turno do jogador e a disponibilidade da carta |
| CT12 | Testa a aceitação do Truco e alteração do valor da mão |
| CT13 | Verifica a pontuação quando um pedido de Truco é recusado |
| CT14 | Testa a sequência de valores 3, 6, 9 e 12 |
| CT15 | Valida o funcionamento da mão de onze |
| CT16 | Verifica a recusa da mão de onze |
| CT17 | Confirma o encerramento da partida aos 12 pontos |
| CT18 | Verifica a proteção dos snapshots e do placar |
| CT19 | Testa as regras específicas da mão de ferro |
| CT20 | Verifica a pontuação de uma mão normal e o início da próxima |
| CT21 | Impede que a mesma dupla aumente novamente seu próprio pedido |
| CT22 | Garante que o pedido de Truco aconteça somente no turno correto |

## Resultado dos testes

Na versão atual do projeto foram executados **22 casos de teste**.

Resultado esperado da execução:

```text
tests 22
pass 22
fail 0
cancelled 0
skipped 0
todo 0
```

Isso significa que todos os cenários implementados na suíte foram aprovados durante a execução.

A evidência da execução deve ser obtida diretamente através do comando:

```bash
npm test
```

e a cobertura pode ser gerada utilizando:

```bash
npm run coverage
```

## Cobertura de código

Além dos testes funcionais, o projeto possui configuração para geração de cobertura utilizando os recursos do próprio Node.js.

A cobertura permite identificar quais partes do código foram exercitadas durante os testes, considerando métricas como:

- Linhas;
- Ramificações;
- Funções.

A cobertura é utilizada como uma métrica complementar aos testes. Um percentual elevado de cobertura não significa que o sistema esteja livre de defeitos, mas indica que uma quantidade maior do código foi executada pelos cenários automatizados.

## Evidências

Após executar os comandos de teste, os resultados podem ser registrados na pasta:

```text
evidencias/
```

Os arquivos de evidência correspondem à execução realizada no ambiente utilizado para a entrega.

Dessa forma, os resultados apresentados representam os testes efetivamente executados no projeto.

## Considerações finais

O projeto foi desenvolvido com foco na aplicação de testes automatizados sobre uma implementação de Truco Paulista.

A suíte de testes contempla regras relacionadas ao baralho, cartas, manilhas, vazas, turnos, Truco, pontuação, mão de onze, mão de ferro e encerramento da partida.

A implementação utiliza JavaScript e os recursos de testes disponibilizados pelo Node.js, permitindo que os cenários sejam executados diretamente pelo terminal sem necessidade de navegador ou interface gráfica.
