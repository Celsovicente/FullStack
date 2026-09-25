const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#enviar");
const informacao = document.querySelector("#informacao");

botao.addEventListener("submit", (e)=>{
    if(nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "")
    {
        informacao.textContent = "Erro, todos os campos devem ser devidamente preenchidos"
    }
    else{
        informacao.textContent = "Dados devidamente preenchidos."
    }
})