/* Map */
const num = [1, 2, 3, 4, 5]

const doubled = num.map(n => n * 2)
const filtrar = num.filter(n => n % 2 == 0);
const total = num.reduce((sum, n) => sum + n, 0);

console.log(doubled);
console.log(filtrar);
console.log(total);

const users = [
    {name: "Celso", age: 22},
    {name: "Joao", age: 21},
    {name: "Maria", age: 20},
]

const names = users.map(users => users.name);
const labels = users.map(users => `${users.name} (${users.age})`)
console.log(names);
console.log(labels);

const produto = [
    {name: "Pen", price: 150, inStock: true},
    {name: "Pencil", price: 100, inStock: false},
    {name: "Board", price: 10000, inStock: true},
    {name: "Paper", price: 1000, inStock: false},
];

const avaliable = produto.filter(p => p.inStock);
const avaliar = produto.filter(p => p.price < 150);

console.log(avaliable);
console.log(avaliar);

const products = [
    {name: "Lamp", price: 250 ,inStock: false},
    {name: "Bag", price: 5250 ,inStock: true},
    {name: "Laptop", price: 360000 ,inStock: true},
    {name: "Watch", price: 2250 ,inStock: true},
]

const instockNames = products
    .filter(p => p.inStock)
    .map(p => p.name)
console.log(instockNames);

const numero = [3, 1, 4, 1, 5, 9, 2, 6];

const sum = numero.reduce((acc, n) => acc + n, 0);
const max = numero.reduce((acc, n) => (n > acc ? n : acc), -Infinity);

console.log(sum);
console.log(max);

const usuario = [
    { id: 1, name: "Ada" },
    { id: 2, name: "Boris" },
    { id: 3, name: "Chen" },
];

const boris = usuario.find(u => u.name === "Boris");
const borisIndex = usuario.findIndex(u => u.name === "Boris");

console.log(boris);
console.log(borisIndex);

const n = [3, 1, 4, 1, 5];

const sorted = n.slice().sort((a, b) => a - b);

console.log(sorted);
console.log(n);  // inal