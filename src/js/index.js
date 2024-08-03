const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes =document.querySelectorAll(".cartao")

btnAvancar.addEventListener("click", function() {
    const ehUltimoCartao = cartaoAtual === 8
    if(ehUltimoCartao){cartaoAtual = -1}

    esconderCartaoSelecionado();
    
    cartaoAtual++;
    mostrarCartao();

});

btnVoltar.addEventListener("click", function() { 
    const ehPrimeiroCartao = cartaoAtual === 0
    if(cartaoAtual === 0){cartaoAtual = 9}

    esconderCartaoSelecionado()
    
    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}