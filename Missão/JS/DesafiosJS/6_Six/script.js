let preco = parseFloat(prompt("Digite o valor do preço:"));
let percentagem = parseFloat(prompt("Digite o valor da percentagem:"));

let precoFinal = preco - ((preco * percentagem) / 100);

document.body.innerHTML = `<h2> O preço final é de: ${precoFinal}</h2>`;