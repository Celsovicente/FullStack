let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));
let imc = peso / altura;

document.body.innerHTML = 
`
    <h2>O seu IMC é = ${imc}</h2>
`