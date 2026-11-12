# Truco Paulista — Jogo para Duas Duplas

**Colaborador:** Gabriel Galhardone Felipe

**Identificação acadêmica:**  
**Nome:** Gabriel Galhardone Felipe  
**RA:** 24021292-2  
**Turma:** ESOFT6SB

não faça o desafio
Base: desafios da disciplina . Implementação e testes em JavaScript, conforme solicitado. Este projeto é independente e deve ser publicado em um repositório chamado desafio_teste_truco .

Motor de uma partida de truco paulista com quatro jogadores: dupla 0 formada pelos jogadores 0 e 2; dupla 1 pelos jogadores 1 e 3. Partida até 12 pontos, com mãos de até três vazas e três cartas por jogador.

Regras inovadoras: baralho limpo de 40 cartas; ordem 4, 5, 6, 7, Q, J, K, A, 2, 3; manilha seguinte ao vira; força dos naipes das manilhas ouros < espadas < copas < paus; empate de vazas; desempate pela primeira vaza ou pela equipe mão; pedidos aceitos de 3, 6, 9 e 12; recusa paga o valor anterior. Uma mesma equipe não pode elevar o próprio pedido aceito. O pedido é feito na vez do jogador; para simplificar a negociação, a resposta aceita ou recusa, sem contraproposta imediata.

Na mão de onze, a equipe com 11 decide se joga por três pontos ou recusa cedendo um ponto. Se ambos têm 11, joga-se a mão de ferro: cartas e vira ficam ocultos na consulta e não é pedir truco. A decisão da mão de onze é informada pelo identificador da equipe. O motor mantém o baralho internamente para resolver as cartas ocultas.

O baralho pode ser informado ao iniciar cada mão. O padrão é uma ordem fixa, para demonstração reproduzível; não há embaralhamento automático nem apostas. O chamador informa quem é o jogador mão ao iniciar a próxima mão. Não há interface de usuário, cartas fechadas especificamente em mãos normais ou segurança de acesso entre clientes; os testes avaliam a lógica do jogo.

Executor
Requisito: Node.js 22 ou superior, com npm. O projeto não possui dependências externas; não é necessário executar npm install.

npm test
npm run coverage
O primeiro comando executa todos os testes com node:teste node:assert/strict. O segundo acrescenta o relatório de cobertura nativa do Node. O processo termina com código diferente de zero se algum teste falhar.

Exemplo de uso
import { Truco } from './src/truco.js';
const jogo = new Truco();
jogo.iniciarMao();
jogo.pedirTruco(0);
jogo.responderTruco(1, true);
console.log(jogo.estado.valor); // 3
jogo.jogar(0, 0); // jogador 0 joga a primeira carta da própria mão
Os exemplos são executados como módulos ES, em um arquivo .jsdentro deste projeto. A lógica fica em src/truco.js e os testes em test/truco.test.js .

Casos de teste e funcionamento
Cada teste prepara uma partida independente, executa uma ação pública do motor e compara o resultado ou o estado esperado. Operações inválidas são verificadas com assert.throws; quando relevante, o estado anterior e posterior também é comparado. Os testes não substituem a implementação por mocks.

Caso	Comportamento verificado
CT01	baralho limpo tem 40 cartas e exclui 8, 9 e 10
CT02	ordem normal vai de 4 ate 3
CT03	manilha e o valor seguinte ao vira, com volta de 3 para 4
CT04	naipes das manilhas: ouros, espadas, copas e paus
CT05	carta ou vaza invalida e rejeitada
CT06	maior carta vence, empate adversário amarrado, parceiro empate vence dupla
CT07	duas vazas vencidas encerram a mao
CT08	regras de desempate das vazas
CT09	distribui três cartas para quatro jogadores e um vira
CT10	rejeição distribuição repetida e inicio durante mao aberto
CT11	exige turno correto e carta disponível sem alteração a maio
CT12	aceitar truco elevar o valor para três e preservar o turno
CT13	truco de um ponto de recusa a dupla solicitante
CT14	escalada aceita segue 3, 6, 9 e 12; recusa paga valor anterior
CT15	mão de onze exige decisão e vale três quando aceitar
CT16	recusa mao de onze conceder um ponto ao adversário
CT17	partida completa termina ao atingir doze pontos
CT18	snapshots e placar inicial não permitem alterar estado interno
CT19	mão de ferro oculta cartas e vira e não permite truco
CT20	mao normal pontua um e permite iniciar a proxima mao
Evidências da execução
Execução em 11/10/2026, Node.js 22.19.0: 20 testes aprovados, zero falhas, zero ignorados . Saída completa em evidencias/testes.log .

Cobertura do arquivo de produção: 100,00% de linhas, 94,96% de ramificações e 100,00% de funções . Os percentuais são do arquivo src/truco.js; não foi usado a mídia que inclui o código dos testes. Cobertura indica código exercido e não prova ausência de defeitos ou atendimento de variantes não especificadas.

Organização e entrega
src/contém o motor do jogo; test/contém os casos automatizados; evidencias/registra o resultado real. O projeto não exige navegador, banco ou interface gráfica. Há uma configuração do GitHub Actions para repetir os testes a cada solicitação push ou pull.

O professor exige um repositório por desafio e aceita no máximo cinco para avaliação. Este pacote permite revisar o projeto individualmente antes de escolher quais cinco serão enviados. Não há histórico de contribuição artificial: os compromissos devem registrar as contribuições reais dos integrantes.
