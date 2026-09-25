const texto = document.querySelector("#texto");
const lista = document.querySelector("#lista");
const botao = document.querySelector("#enviar");

botao.addEventListener("click", (e)=>{
    e.preventDefault();

    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.textContent = texto.value;
    btn.textContent = "Remover";
    btn.classList.add("btn-remover");

    li.appendChild(btn);
    lista.appendChild(li);
   
    texto.textContent = "";
});

lista.addEventListener("click", (event) =>{
    if(event.target.classList.contains("btn-remover")){
        const li = event.target.closest("li");
        li.remove();
    }
});