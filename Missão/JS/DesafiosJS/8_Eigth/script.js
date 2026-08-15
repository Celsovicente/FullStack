let num = parseFloat(prompt("Digite um número: "));
let num2 = parseFloat(prompt("Digite um número: "));
let resultado;
let opcao = prompt("Digite um símbolo para a operação:\n + - Somar\n / - Dividir\n - - Subtrair\n * - Multiplicar\n % - Resto da Divisão\n");

switch(opcao){
    case "+":
        resultado = num + num2;
        document.body.innerHTML = `
        <h2> A soma entre ${num} e ${num2} é = ${resultado} </h2>`
        break;
    case "-":
        resultado = num - num2;
        document.body.innerHTML = `
        <h2> A diferença entre ${num} e ${num2} é = ${resultado} </h2>`
        break;
    case "*":
        resultado = num * num2;
        document.body.innerHTML = `
        <h2> O produto entre ${num} e ${num2} é = ${resultado} </h2>`
        break;
    case "/":
        if(num2 == 0){
            document.body.innerHTML = "<h2> O valor do segundo número deve ser diferente de zero.</h2>"    
            break;
        }
        resultado = num / num2;
        document.body.innerHTML = `
        <h2> O quoiente entre ${num} e ${num2} é = ${resultado} </h2>`
        break;
    case "%":
        resultado = num % num2;
        document.body.innerHTML = `
        <h2>O resto entre ${num} e ${num2} é = ${resultado} </h2>`
        break;
    default:
        document.body.innerHTML = "<h2> Erro, símbolo inválido! </h2>"
}
