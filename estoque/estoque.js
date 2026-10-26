const janelaPerfil = document.getElementById("janelaPerfil");

function abrirPerfil() {
    janelaPerfil.classList.add("aberto");
}

function fecharPerfil() {
    janelaPerfil.classList.remove("aberto");
}

function sairConta() {
    window.location.href = "login.html";
}



