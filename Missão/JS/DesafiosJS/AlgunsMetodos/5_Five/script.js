const numeros = [ 10, 20, 30, 40, 50 ]
const soma = numeros.reduce((s, n) =>{
    return s + n;
}, 0)

console.log(soma);
