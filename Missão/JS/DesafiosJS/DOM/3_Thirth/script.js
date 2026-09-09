const titulo = document.querySelector("#titulo");
titulo.addEventListener("click", (e) =>{
    e.preventDefault();
    titulo.textContent = "Estou Aprendendo DOM!";
})