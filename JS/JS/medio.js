function devolver(num){
    do
    {
        num = parseInt(prompt("Digite um numéro:"));
        if(num % 2 == 0){
            document.body.innerHTML += `<p>${num} <br/></p>`;
        }
    }while(num != 0);
}

function media(numero){
    numero = parseInt(prompt("Digite a quantidade de valores a serem lidos:"));
    let soma = 0, m = 0, num;
    for(let i = 1; i <= numero; i++)
    {
        num = parseInt(prompt("Digite um numero: "));
        soma += num;
    }
        
    m = soma / numero;
    return document.body.innerHTML = ` <p> A média é ${m} </p>`;
}

/* devolver();
media(); */

const produto = (a, b)  => {
    return document.body.innerHTML += ` O produto entre ${a} e ${b} é = ${a * b} <br/>` 
};

const soma = (a, b)  => {
    return document.body.innerHTML += ` A soma entre ${a} e ${b} é = a ${a + b} <br/>` 
};

const div = (a, b)  => {
    return document.body.innerHTML += ` O quociente entre ${a} e ${b} é = ${a / b} <br/>` 
};

const diferenca = (a, b)  => {
    return document.body.innerHTML += ` A diferenca entre ${a} e ${b} é = ${a - b} <br/>` 
};

const dobro = (a)  => {
    return document.body.innerHTML += `O dobro de ${a}  é = ${a * a} <br/>` 
};

const multiplo = (a) =>{
    if( a % 2 == 0)
        return document.body.innerHTML = `O número ${a}  multiplo de 2 <br/>`;
    else 
        return document.body.innerHTML = `O número ${a} não é multiplo de 2 <br/>`;
} 

multiplo(10);
produto(10, 20);
soma(10, 20);
div(10, 20);
diferenca(10, 20);
dobro(5);


