var gift = document.getElementById("gift");
var botao = document.getElementById("button");
var msgInicial = document.getElementById("msgInicial");
var next = document.getElementById("nextButton");

function mostrarMensagem() {
    document.getElementById("mensagem").style.display = "block";
    gift.style.display = 'none';
    botao.style.display = 'none';
    msgInicial.style.display = 'none';
    document.getElementById("nextButton").style.display = "block";
}

function textao() {
    document.getElementById("textao").style.display = "block";
    next.style.display = 'none';
    document.getElementById("mensagem").style.display = "none";
}
