async function executa()
{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            try
            {
                resolve("Seja Bem Vindo Meu Caro!");
            }
            catch(error)
            {
                reject("Erro detectado")
            }
        }, 1000)
    })
}

executa()
.catch((erro) => console.log(erro))
console.log("Olá Mundo");
