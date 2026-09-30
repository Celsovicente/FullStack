async function buscar(){
    try {
        const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const resposta = await dados.json();
        console.log(resposta);
    } catch (error) {
        console.log("Não foi posível carregar");
    }
}

buscar();