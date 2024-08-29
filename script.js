const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assinale a alternativa que apresenta a melhor conceituação do termo meio ambiente:",

        alternativas: [
            {
                texto: "É a inter-relação entre os diversos componentes físicos e humanos.",
                afirmacao: "certo "
            },
            {
                texto: "É a relação entre os aspectos de origem antrópica do espaço social.",
                afirmacao: "errada."
            }
        ]
    },
    {
        enunciado: "Assinale a alternativa que NÃO apresenta um problema ambiental:",
        alternativas: [
            {
                texto: "Infiltração da água da chuva no solo.",
                afirmacao: "certa."
            },
            {
                texto: "Emissão de poluentes atmosféricos.",
                afirmacao: "errado."
            }
        ]
    },
    {
        enunciado: "Qual conceito ligado ao meio ambiente defende a manutenção das características naturais do espaço natural, ou seja, sem nenhum tipo de intervenção antrópica?",
        alternativas: [
            {
                texto: "Preservação ambiental.",
                afirmacao: "certa"
            },
            {
                texto: " Reserva sustentável.",
                afirmacao: "errado."
            }
        ]
    },
    {
        enunciado: "O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de",
        alternativas: [
            {
                texto: "sustentabilidade.",
                afirmacao: "certo."
            },
            {
                texto: "espaço geográfico..",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Qual foi a primeira grande conferência internacional, realizada pela Organização das Nações Unidas (ONU), sobre o meio ambiente em nível global? ",
        alternativas: [
            {
                texto: "Conferência das Nações Unidas sobre o Meio Ambiente Humano.",
                afirmacao: "certa."
            },
            {
                texto: "Conferência das Nações Unidas sobre Mudanças Climáticas.",
                afirmacao: "errado "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();