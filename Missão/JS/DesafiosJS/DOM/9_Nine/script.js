const tecnologias = ["HTML", "CSS", "JavaScript", "DOM"];
const lista = document.querySelector("#lista");

tecnologias.forEach((elemento) =>{

    const li = document.createElement("li");    
    li.textContent = tecnologias;
    lista.appendChild(li);
});