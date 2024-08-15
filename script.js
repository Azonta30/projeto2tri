const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como podemos ajudar o meio ambiente?",
        alternativas: [
            {
                texto: "preservando as matas e rios , separando o lixo e reduzindo as emissões de carbono",
                afirmacao: "afirmação"
            },
            {
                texto: "não podemos ajudar o meio ambiente de nenhuma maneira.",
                afirmacao: "afirmação."
            }
        ]
    },
    {
        enunciado: "Preservar o meio ambiente é tarerfa de:",
        alternativas: [
            {
                texto: "apenas os políticos",
                afirmacao: "afimação."
            },
            {
                texto: "dever de todos.",
                afirmacao: "afirmação."
            }
        ]
    },
    {
        enunciado: "qual a importância da reciclagem?",
        alternativas: [
            {
                texto: "não tem importância.",
                afirmacao: "afirmação."
            },
            {
                texto: "ajuda a conservar os recursos naturais do nosso planeta.",
                afirmacao: "afirmação."
            }
        ]
    },
    {
        enunciado: "Você acha importante defender o meio ambiente?",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Não.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quais são os cinco iumpactos no meio ambiente?",
        alternativas: [
            {
                texto: "poliuição do ar, desmatamento,extinção,degradação do solo e superlotação",
                afirmacao: "afirmação"
            },
            {
                texto: "melhoraamento do ar,conservação das arvores, conservação da espécies,solo fértil e não há superlotação.",
                afirmacao: "afirmação."
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