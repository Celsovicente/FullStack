function bucarUtilizador(callBack){
    setTimeout(() =>{
        const utilizador = {
            id: 1,
            nome: "Celso"
        };

    console.log("Utilizador Encontrado: ", utilizador);
    callBack(utilizador);
    
    }, 2000)
}

function buscarProjetos(utilizador, callBack){
    setTimeout(() => {
        const projetos = [
            "TodoList",
            "Sistema de Gestão Escolar",
            "Sistema de Faturação",
            "Calculadora"
        ];

        console.log("Projeto encontrado: ", projetos);
        callBack(projetos)

    }, 3000)
}

bucarUtilizador((utilizador) =>{
    buscarProjetos(utilizador,(projetos) => {
        console.log("Projeto Terminado!");
    })
})

// Exercício 3
function primeira(callBack){
    setTimeout(() =>{
        console.log("Primeira Função");
        callBack();
    }, 2000)
}

function segunda(callBack){
    setTimeout(() =>{
        console.log("Segunda Função");
        callBack();
    }, 2000)
}

function terceira(callBack){
    setTimeout(() =>{
        console.log("Terceira Função");
        callBack();
    }, 2000)
}

primeira((teste) =>{
    segunda((teste) =>{
        terceira((teste) =>{
            console.log("Olá Mundo")
        })
    })
})