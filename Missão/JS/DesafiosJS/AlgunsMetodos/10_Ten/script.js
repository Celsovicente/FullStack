const projetos = [
    {
        nome: "Landing Page",
        descricao: "Página inicial de um site pessoal",
        tecnologia: "HTML e CSS",
        concluido: true
    },
    {
        nome: "Calculadora",
        descricao: "Calculadora com operações matemáticas básicas",
        tecnologia: "JavaScript",
        concluido: true
    },
    {
        nome: "Lista de Tarefas",
        descricao: "Aplicação para adicionar e remover tarefas",
        tecnologia: "JavaScript",
        concluido: false
    },
    {
        nome: "Portfólio",
        descricao: "Site para apresentar projetos pessoais",
        tecnologia: "HTML, CSS e JavaScript",
        concluido: false
    },
    {
        nome: "Sistema de Login",
        descricao: "Página de autenticação de utilizadores",
        tecnologia: "JavaScript",
        concluido: true
    }
];

const filtrar = projetos.filter(n => n.concluido == true);
const nome = filtrar.map(name => name.nome);
const ifExist = filtrar.some(n => n.tecnologia == "JavaScript")
const finish = projetos.every(n => n.concluido === true);
const soma = filtrar.reduce((cont) => {
    return cont + 1;
}, 0)

const novo = [
    ...projetos,
    {
        nome: "Sistema Bancário",
        descricao: "Aplicação para simular operações bancárias",
        tecnologia: "JavaScript",
        concluido: false
    }
]

console.log(filtrar);
console.log(nome);
console.log(ifExist);
console.log(finish);
console.log(soma);
console.log(novo);




