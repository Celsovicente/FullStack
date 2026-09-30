async function executar(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Promise reslvida");
        }, 1000);
    })
}

executar()
.then((resultado) => console.log(resultado))