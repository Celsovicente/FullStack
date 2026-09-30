const texto = document.querySelector("#texto")

async function executar(){
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const resposta = await dados.json();
    try{
        const aux = JSON.stringify(resposta)
        console.log(aux);
        texto.textContent = aux    
    }catch(error){
        console.log("Erro dectetado!")
    }
}

executar().catch((erro) => console.log(erro))