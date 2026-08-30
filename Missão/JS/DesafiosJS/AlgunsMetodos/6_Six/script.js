const colecao = [
    { id: 1 , nome: "João" },
    { id: 2, nome: "Márcia" },
    { id: 3, nome: "Carlos" },
    { id: 4, nome: "Ana" }
];

const encontrar = colecao.find(n => n.id == 3)
console.log(encontrar);
