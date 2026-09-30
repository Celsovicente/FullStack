const botao = document.querySelector("#buscar");
const status = document.querySelector("#status");
const resultado = document.querySelector("#resultado")

async function executar() {
    status.textContent = "Caregando ....";
    resultado.textContent = "";

    try {
        
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        
        if(!resposta.ok){
            throw new Error("Erro ao buscar os dados!");
        }

        const dados = await dados.json();

        resultado.textContent = 
        `
            ID: ${dados.id} <br/> 
            Título: ${dados.title} <br/> 
            Conteúdo: ${dados.body} <br/> 
        `


    } catch (error) {
        status.textContent = "Não foi possível carregar os dados.";
        console.log(error)
    }
}

botao.addEventListener("click", executar)