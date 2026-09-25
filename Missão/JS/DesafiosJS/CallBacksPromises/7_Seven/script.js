const promessa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Dados carregados com sucesso");
    }, 2000)
})

promessa.then((resultado) =>{
    console.log(resultado);
})
.catch((erro) =>{
    console.log(erro);
})
.finally(() =>{
    console.log("Finalizando a promessa");
})