async function executar(){
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const resposta = await dados.json();
    console.log(resposta);
}

executar();