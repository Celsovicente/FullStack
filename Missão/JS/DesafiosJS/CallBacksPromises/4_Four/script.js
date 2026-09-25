const promessa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Resultado apresentado com Sucesso");
    }, 1000)
})

promessa.then((resultado) =>{
    console.log(resultado);
})