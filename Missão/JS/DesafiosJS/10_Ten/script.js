let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

document.body.innerHTML = ` 
<h2> A sua idade em ${anoAtual} é = ${idade} </h2>
`;

