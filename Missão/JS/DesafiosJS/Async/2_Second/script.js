async function executa(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Depois de 2 segundos");
        }, 2000)
    })
}

executa()
.then((resolve) => console.log(resolve))