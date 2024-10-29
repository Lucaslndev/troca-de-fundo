// Função para alterar a cor do fundo ao clicar no botão

function TrocaCor() {
    /* Verificar a cor atual do site */
    if (document.body.style.backgroundColor === "black") {
        // Se o fundo estiver preto, ele alterara para branco, a mesma coisa com o texto porém invertido
        document.body.style.backgroundColor = "white"; // Muda a cor do fundo para branco
        document.body.style.color = "black"; // Muda a cor do texto para preto

        // Atualiza o texto do botão para indicar o "Modo Escuro"
        document.getElementById("toggleButton").textContent = "Modo Escuro"; // .textContent: indica o texto
        // Documento === HTML   
    }

    else {
        // Se estiver branco muda para preto
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        // Atualiza o texto do botao para "Modo Claro"
        document.getElementById("toggleButton").textContent = "Modo Claro";
    }
}