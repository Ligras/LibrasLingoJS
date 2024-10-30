const corFundoInput = document.getElementById('corFundo');
const tamanhoFonteInput = document.getElementById('tamanhoFonte');
const resetButton = document.getElementById('resetButton');
var e = "principal.html";

/*function cadastro(){
    document.location = "telaCadastro.html";
}
function login(){
    document.location = "telaLogin.html";
}
function voltar(){
    document.location = "principal.html";
}
function jogar(){
    document.location = "telaJogo.html";
}
*/

function paginaIndisponivel(){
    alert("indisponivel no momento");
}
function resetSettings() {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.fontSize = '16px';
    document.body.style.margin = '100px';
    corFundoInput.value = '#ffffff';
    tamanhoFonteInput.value = '16';
}
function redirecionar(e){
    document.location = e;
}
document.addEventListener('DOMContentLoaded', function (){
    document.addEventListener("input", function(){
        document.body.style.backgroundColor = corFundoInput.value;
        document.body.style.margin = tamanhoFonteInput.value + 'px';});   
    });
