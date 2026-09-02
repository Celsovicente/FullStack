const produto = {
    nome: "Mandioca",
    preco: 2000,
    categoria: "Tubercole"
}

const produto2 = {
    ...produto,
    preco: 3000
}

console.log(produto);
console.log(produto2);
