let nome = "Celso"
console.log(nome);

nome = "Vicente"
console.log(nome);

const name = "Celso Vicente"
console.log(name);

/* 
name = "Ola mundo";
console.log(name); 
*/

var lets = 10
console.log(lets);

lets = 3
console.log(lets);

/* Operadores */
let num = 10, num2 = 4, resultado;
resultado = num + num2;
console.log(resultado);

resultado = num - num2;
console.log(resultado);

resultado = num / num2;
console.log(resultado);

resultado = num * num2;
console.log(resultado);

console.log(num == num2);

/* Operadores Lógicos */
console.log(true || false);
console.log(false && false);
console.log(true * false);
console.log(true ** false);
console.log(true ^ false);

console.log(`A soma entre ${num} e ${num2} é = ${num+num2}`);

/* Condicionais */
let a = 15, b = 23;
    if(a > b)
        console.log(`O valor de a é = ${a} e é maior`);
    else if(a == b)
        console.log("Os números são iguais");
    else        
        console.log(`O valor de b é = ${a} e é maior`);

let l = 1
switch(l){
    case 1:
        console.log("Olá Mundo")
        break
    default:
        console.log("Bem Vindo");
}