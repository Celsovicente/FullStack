const colecao = [
    { nome: "Notebook", preco: 3000, categoria: "tecnologia" },
    { nome: "Camiseta", preco: 100, categoria: "roupa" },
    { nome: "Mouse", preco: 200, categoria: "tecnologia" },
    { nome: "Calça", preco: 300, categoria: "roupa" },
    { nome: "Teclado", preco: 500, categoria: "tecnologia" }
]

const tecnologia = colecao.filter(n => n.categoria === "tecnologia");
const mapa = tecnologia.map( dados => dados.nome);
const soma = tecnologia.reduce(
    (sum , produto)=> sum + produto.preco,
    0
);

console.log(tecnologia);
console.log(mapa);
console.log(soma);


