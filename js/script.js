
// lista de palavras
const listasdePalavras = [

        palavra001 = { nome: "IRLANDA", categoria: "PAISES" },
        palavra002 = { nome: "BRASIL", categoria: "PAISES" },
        palavra003 = { nome: "JAPAO", categoria: "PAISES" },
        palavra004 = { nome: "ALEMANHA", categoria: "PAISES" },
        palavra005 = { nome: "ARGENTINA", categoria: "PAISES" },
        palavra006 = { nome: "CACHORRO", categoria: "ANIMAL" },
        palavra007 = { nome: "GATO", categoria: "ANIMAL" },
        palavra008 = { nome: "CAVALO", categoria: "ANIMAL" },
        palavra009 = { nome: "ELEFANTE", categoria: "ANIMAL" },
        palavra010 = { nome: "LEAO", categoria: "ANIMAL" },
        palavra011 = { nome: "CARRO", categoria: "VEICULO" },
        palavra012 = { nome: "MOTO", categoria: "VEICULO" },
        palavra013 = { nome: "BICICLETA", categoria: "TRASPORTE" },
        palavra014 = { nome: "CAMINHAO", categoria: "VEICULO" },
        palavra015 = { nome: "BARCO", categoria: "VEICULO" },
        palavra016 = { nome: "ESCOVA DE DENTES", categoria: "HIGIENE" },
        palavra017 = { nome: "PASTA DE DENTE", categoria: "HIGIENE" },
        palavra018 = { nome: "SABONETE", categoria: "HIGIENE" },
        palavra019 = { nome: "SHAMPOO", categoria: "HIGIENE" },
        palavra020 = { nome: "TOALHA", categoria: "HIGIENE" },
        palavra021 = { nome: "CELULAR", categoria: "APARELHO" },
        palavra022 = { nome: "MONITOR", categoria: "APARELHO" },
        palavra023 = { nome: "RADIO", categoria: "APARELHO" },
        palavra024 = { nome: "COMPUTADOR", categoria: "APARELHO" },
        palavra025 = { nome: "TABLET", categoria: "APARELHO" },
        palavra026 = { nome: "CHILE", categoria: "PAISES" },
        palavra027 = { nome: "FRANCA", categoria: "PAISES" },
        palavra028 = { nome: "MEXICO", categoria: "PAISES" },
        palavra029 = { nome: "ITALIA", categoria: "PAISES" },
        palavra030 = { nome: "PORTUGAL", categoria: "PAISES" },
        palavra031 = { nome: "TIGRE", categoria: "ANIMAL" },
        palavra032 = { nome: "PATO", categoria: "ANIMAL" },
        palavra033 = { nome: "RAPOSA", categoria: "ANIMAL" },
        palavra034 = { nome: "GALINHA", categoria: "ANIMAL" },
        palavra035 = { nome: "URSO", categoria: "ANIMAL" },
        palavra036 = { nome: "AVIAO", categoria: "TRASPORTE" },
        palavra037 = { nome: "TREM", categoria: "TRASPORTE" },
        palavra038 = { nome: "COMPUTADOR", categoria: "APARELHO" },
        palavra039 = { nome: "ONIBUS", categoria: "TRASPORTE" },
        palavra040 = { nome: "TRATOR", categoria: "VEICULO" },
        palavra041 = { nome: "DESODORANTE", categoria: "HIGIENE" },
        palavra042 = { nome: "CREME DENTAL", categoria: "HIGIENE" },
        palavra043 = { nome: "ESCOVA DE CABELO", categoria: "HIGIENE" },
        palavra044 = { nome: "CORTADOR DE UNHA", categoria: "HIGIENE" },
        palavra045 = { nome: "LIXA DE UNHA", categoria: "HIGIENE" },
        palavra046 = { nome: "SMARTPHONE", categoria: "APARELHO" },
        palavra047 = { nome: "NOTEBOOK", categoria: "APARELHO" },
        palavra048 = { nome: "FONE DE OUVIDO", categoria: "APARELHO" },
        palavra049 = { nome: "TELEVISAO", categoria: "APARELHO" },
        palavra050 = { nome: "MICROONDAS", categoria: "ELETRODOMESTICO" }

];

// armazenamentos primários
let palavrasEscolhida;
let categoriaEscolhida;

let mostrarPalavra;
let mostrarCategoria;
let letrasChutadas;

let tentativasRestantes;
let numeroErrados;






// função 1
function iniciarjogo() {


    // comando para escolher uma palavra aleatória
    const indexPalavra = parseInt(Math.random() * listasdePalavras.length);

    // conectando ( palavrasEscolhida + listasdePalavras)
    palavrasEscolhida = listasdePalavras[ indexPalavra ].nome;
    console.log(palavrasEscolhida);  //  console.log para debugging

    // conectando ( categoriaEscolhida + listasdePalavras)
    categoriaEscolhida = listasdePalavras[indexPalavra].categoria;
    console.log(categoriaEscolhida);  //  console.log para debugging

// comando da exibição do " _ _ _ ", ignorando os espaços
    mostrarPalavra = palavrasEscolhida.split('').map(letra => letra === ' ' ? ' ' : '_');
    console.log(mostrarPalavra);  // console.log para debugging


    // comando para as letras chutadas/ ira iniciar com 0 chutadas
    letrasChutadas = [];

    // número máximo de tentativas
    tentativasRestantes = 6;

    // iniciar o jogo com 0 erros
    numeroErrados = 0;

    // conectando a função
    atualizarTela();

    tocarSom('somInicial');
}


// Função 2 - para o botao reiniciar o jogo da modal
function reiniciarJogo() {
    const modalResultado = bootstrap.Modal.getInstance(document.getElementById('resultadoModal'));
    tocarSom('somClick');
    modalResultado.hide();
    iniciarjogo();  // Reinicia o jogo
}

function sonModal() {
    tocarSom('somClick');
}


// Adicionando eventos nos botões do modal
document.querySelector('.btn-secondary').addEventListener('click', () => tocarSom('somClick'));
document.querySelector('.btn-primary').addEventListener('click', () => tocarSom('somClick'));



// função 3
function atualizarTela() {

      // Atualiza o conteúdo da categoria
    document.querySelector("#p-mostraCategoria").innerText = categoriaEscolhida;

    // Atualiza o conteúdo  das letras corretas + ' _ _ _ '
    document.querySelector(".mostrarLetras").innerText = mostrarPalavra.join(' ');
    
    // Atualiza o conteúdo  das letras-Chutadas
    document.querySelector(".letras-Chutadas").innerText = letrasChutadas.join(', ');



    // comando da imagem da forca
    document.querySelector(".forca").src = `img/forca${numeroErrados}.png`;

    // comando de como e quando o jogo irá terminar
    if (tentativasRestantes === 0) {

        abrirModalResultado("VOCÊ PERDEU", "A PALAVRA CORRETA ERA: " + palavrasEscolhida);
        tocarSom('somDerrota');
    } else if (!mostrarPalavra.includes('_')) {

        abrirModalResultado("VOCÊ VENCEU", "MEUS PARABÉNS");
        tocarSom('somVitoria');
    }



}















// Função 4 - para abrir o modal de resultado (vitória/derrota)
function abrirModalResultado(titulo, mensagem) {

    document.querySelector("#resultadoModalLabel").innerText = titulo;
    document.querySelector("#resultadoMensagem").innerText = mensagem;

    const modalResultado = new bootstrap.Modal(document.getElementById('resultadoModal'));
    modalResultado.show();
}

// Função 5 - para abrir o modal de aviso (letra inválida ou repetida)
function abrirModalAviso(mensagem) {

    document.querySelector("#avisoMensagem").innerText = mensagem;

    const modalAviso = new bootstrap.Modal(document.getElementById('avisoModal'));
    modalAviso.show();
}









// função 6
function btcomeçar() {

    // Tocar som no botão iniciar
    tocarSom('somClick');

    // armazenamentos - da ( function btcomeçar )
    const entradaLetra = document.querySelector('.compoParaDigitar');
    const letra = entradaLetra.value.toUpperCase();  // Recebendo a letra/ Convertendo a letra para maiúsculas




    // comando e configuração se o usuário inserir uma letra errada
    if (!letra.match(/[a-zà-ùç]/i)) {

        abrirModalAviso('POR FAVOR, COLOQUE UMA LETRA VÁLIDA.');
        entradaLetra.value = ''; // Limpa o campo de texto
        tocarSom('somInvalido');
        return;
    }

    // comando e configuração se o usuário inserir uma letra novamente
    if (letrasChutadas.includes(letra)) {
        
        abrirModalAviso('ESSA LETRA JÁ FOI INSERIDA, TENTE OUTRA.');
        entradaLetra.value = ''; // Limpa o campo de texto
        tocarSom('somLetraRepetida');
        return;
        
    }





    // comando para colocar as letras digitadas no container: "letras chutadas"
    letrasChutadas.push(letra);








    if (palavrasEscolhida.includes(letra)) {

        for (let i = 0; i < palavrasEscolhida.length; i++) {
        
            if (palavrasEscolhida[i] === letra) {
            
                mostrarPalavra[i] = letra; // mantém o espaço

                tocarSom('somAcerto');
            }
        }
    
    } else {
        tentativasRestantes--;
        numeroErrados++;
        tocarSom('somErro');
    }






    entradaLetra.value = '';

    atualizarTela();
}

    // Tocar som de inicialização quando o jogo começar
    document.addEventListener('DOMContentLoaded', () => {
        tocarSom('somInicial');  // Toca o som de fundo quando o jogo carregar
    });

function tocarSom(idSom) {
    const som = document.getElementById(idSom);
    if (som) { 
        if (idSom === 'somInicial') {
        som.volume = 0.2;  // Ajusta do volume apenas para o som de inicialização (20% de volume)
    }
        som.currentTime = 0;
        som.play().catch(error => console.log("Erro ao reproduzir som:", error));  // Captura erros
    } else {
        console.log("Elemento de som não encontrado:", idSom);    // Captura erros
    }
}


// Evento para iniciar o jogo quando a página carrega
window.onload = iniciarjogo;






