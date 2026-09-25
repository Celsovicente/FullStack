const texto = document.querySelector("#texto");
const lista = document.querySelector("#lista");
const botao = document.querySelector("#enviar");


botao.addEventListener("click", (e)=>{
    e.preventDefault();

    const li = document.createElement("li");
    const btn = document.createElement("button");
    
    li.textContent = texto.value;
    btn.textContent = "Remover";
    
    li.appendChild(btn);
    lista.appendChild(li);
    
    btn.addEventListener("click", ()=>{
        li.remove();
    });

    texto.value = "";
})

