async function mensagem(){
    console.log("Olá Mundo")
}

function saudar(){
    console.log("Seja Bem Vindo ao Meu Mundo");
}

async function dizerOi() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Primeira mensagem a ser Apresentada");
        }, 2000)
    })
}

dizerOi()
.then((resultado) =>{
    console.log(resultado);
})
saudar()
mensagem()