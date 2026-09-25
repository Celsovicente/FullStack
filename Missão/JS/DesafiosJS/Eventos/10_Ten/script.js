const nome = document.querySelector("#nome");
const descricao = document.querySelector("#descricao");
const link = document.querySelector("#link");
const tecnologia = document.querySelector("#tecnologia");
const adicionar = document.querySelector("#adicionar");
const cardy = document.querySelector(".cardy");

adicionar.addEventListener("click", (event) =>{
    event.preventDefault();
    if(nome.value === "" || descricao.value === "" || 
        tecnologia.value === ""|| link.value === ""){
        console.log("Erro, todos os campos devem ser preenchidos");
    }
    else
    {
        const meusProjetos = [nome.value , descricao.value , tecnologia.value, link.value];
     
        for(let i = 0; i < meusProjetos.length; i++)
        {
            const p  = document.createElement("p");
            p.textContent = meusProjetos[i];
            cardy.append(p);
        }
        
    }
})

