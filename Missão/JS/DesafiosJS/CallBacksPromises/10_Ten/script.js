const sucesso = false

const promessa = new Promise((resolve , reject) =>{
    setTimeout(() =>{
        if(sucesso)
        {
            const dados = {
                id: 1, 
                nome: "Celso", 
                idade: 22, 
                estadoCivil: "Solteiro"
            }
            resolve(dados)   
        }
        else {
            reject("Dados errados");
        }
        
    }, 3000)
})

promessa.then((resulado) =>{
    console.log(resulado);
})
.catch((erro) => console.log(erro))
.finally(() => console.log("Tobeta Bango"))