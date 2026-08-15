const user = "Celso Vicente";
const senha = 1234;

let userName = prompt("Digite o nome do usúario: ");
let pass = prompt("Digite a password: ");

if(user == userName && senha == pass){
    document.body.innerHTML = 
    `<h2> Login realizado com sucesso!</h2>`;
} else if(user != userName && senha != pass){
    document.body.innerHTML = 
    `<h2> Nome e senha incorretas, tente novament!</h2>`;
}else if(user != userName || senha != pass){
    document.body.innerHTML = 
    `<h2> Nome ou senha incorreta, tente novamente!</h2>`;
}
