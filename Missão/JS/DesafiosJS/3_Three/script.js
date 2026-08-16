let numero = parseInt(prompt("Digite um número: "));

if(numero % 2 == 0  && numero > 0){
    document.body.innerHTML = `<h2> O número é par e positivo</h2>`
}else if (numero % 2 == 0 && numero < 0){
    document.body.innerHTML = `<h2> O número é par e negativo</h2>`
}else if(numero == 0){
    document.body.innerHTML = `<h2> O número é nulo</h2>`
}else if (numero % 2 != 0 && numero > 0){
    document.body.innerHTML = `<h2> O número é impar e positivo</h2>`
}else if (numero % 2 != 0 && numero < 0){
        document.body.innerHTML = `<h2> O número é impar e negativo</h2>`
    }