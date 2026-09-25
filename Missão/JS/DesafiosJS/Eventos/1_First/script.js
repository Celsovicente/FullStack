const botao = document.querySelector("#botao");
let count =+ 1;

botao.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Clicou em mim!");
    console.log(count);
    count++;
})