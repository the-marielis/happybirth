var gift = document.getElementById("gift");
var botao = document.getElementById("button");
var msgInicial = document.getElementById("msgInicial");

function mostrarMensagem() {
    document.getElementById("mensagem").style.display = "block";
    gift.style.display = 'none';
    botao.style.display = 'none';
    msgInicial.style.display = 'none';
}
