const colecao = [
    { nome: "NoteBook", preco: 3000 }, 
    { nome: "Mouse", preco: 200 }, 
    { nome: "Monitor", preco: 200 },
    { nome: "Teclado", preco: 1500 }
];

const filtro = colecao.filter( coletar => coletar.preco > 1000)
console.log(filtro);
