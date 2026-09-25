const sucesso = true;

const promessa = new Promise((resolve, reject) =>{
    if(sucesso == true)
    {
        setTimeout(() =>{
            resolve("Resolvendo");
        }, 1000)
    }
    else
    {
        setTimeout(() => {
            reject("Recusando a mesma");
        }, 2000)
    }

});

promessa.then((resultado) => {
    console.log(resultado)
})
.catch((result) => { 
    console.log(result)
})