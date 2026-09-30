async function executar(){
    try {
        const dados = await Promise.reject("Erro");
        console.log(dados);
    } 
        catch(error) 
    {
        console.log(error);
    }
}

executar()