const titulo = document.querySelector("#titulo")

async function executar(){
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const resultado = dados.json();
    titulo.textContent = dados.title;    
}

executar();