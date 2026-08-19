let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");
let enviar = document.querySelector("#enviar");

enviar.addEventListener("click", (e)=>{
    e.preventDefault();
    if(nome.value === "" || mensagem.value === "" || email.value === "")
        document.body.innerHTML = `<h2>Preencha todos os campos</h2>`
    else
        document.body.innerHTML = `Seja Bem Vindo ${nome.value}, portador do email ${email.value}`
});
