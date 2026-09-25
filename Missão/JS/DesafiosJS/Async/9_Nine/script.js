const projetos = [
    "TodoList",
    "Sistema de Gestão",
    "Sistema de Parquamento",
    "Sistema de Irrigação as Escolas"
]

function carregarProjetos(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(projetos)
        }, 3000)
    })
}

console.log("Carregando os projetos");
carregarProjetos()
.then((resultado) => console.log(resultado))
.catch((erro) => console.log(erro))
.finally(()=> console.log("Precessou"))