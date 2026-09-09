const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");
const lista = document.querySelector("#lista");

botao.addEventListener("click", (e) =>{
    e.preventDefault();
    if(texto.value == "")
    {
        console.log("Erro");
        return;
    }
        
    const li = document.createElement("p");
    li.textContent = texto.value;
    lista.appendChild(li);
})