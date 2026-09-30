let mensagem = document.querySelector("#mensagem");

async function executar(){
    mensagem = await console.log("Loading......");
    try 
    {
        const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");    
        const resposta = await dados.json();
        mensagem.textContent = resposta.title;
    } 
    catch (error) 
    {
     console.log(error)
    }
}

executar();