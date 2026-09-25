const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#enviar");
const informacao = document.querySelector("#informacao");

botao.addEventListener("click", ()=> {
    if(nome.value.trim() === "" || mensagem.value.trim() === "")
    {
        informacao.textContent = "Erro!";
    }
})