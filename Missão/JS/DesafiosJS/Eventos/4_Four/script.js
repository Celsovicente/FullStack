const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#nome");
const botao = document.querySelector("#enviar");

formulario.addEventListener("submit", (e) =>{
    if(nome.value.trim() === ""){
        console.log("Erro");
    }
    else
    {
        console.log("Seja bem vindo");
    }
})
