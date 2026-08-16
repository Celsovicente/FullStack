let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));

if(peso <= 0 || altura <= 0){
    document.body.innerHTML = `O peso ou a altura não podem ser nulos, nem negativo, tente novamente!`
}
else{   
    let imc = peso / (altura * altura);
    document.body.innerHTML = `<h2>O seu IMC é = ${imc}</h2>`
}
