async function buscar(){
    const dados = await fetch("htpps://jsonplaceholder.typicode.com/posts/1");
    const resposta = await dados.json();
    console.log(resposta);
}

buscar();