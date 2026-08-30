const elementos = [
    { nome: "Celso", idade: 22 },
    { nome: "Ana", idade: 19 },
    { nome: "Pedro", idade: 25 }
]

const filtro = elementos.map( arr => arr.idade);
console.log(`${filtro}`);
