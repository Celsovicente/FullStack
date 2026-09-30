async function executar(){
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const resposta = await dados.json();
    const aux = JSON.stringify(resposta)
    console.log(aux);
}

executar();