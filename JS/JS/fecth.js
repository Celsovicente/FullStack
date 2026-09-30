async function buscar(){
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(dados);
}

buscar();