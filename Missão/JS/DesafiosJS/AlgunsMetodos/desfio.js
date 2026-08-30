const meusProjetos = [
    {
        nome: "Sistema de Gestão Escolar",
        descricao: "Um Sistema de Gestão Escolar desenvolvido em Java",
        link: "https://github.com/Celsovicente/GestaoEscolar",
        tecnologia: "Java"
    },
    {
        nome: "Projeto Biológico",
        descricao: "Um projeto que simula a reprodução dos seres humanos feito em C",
        link: "https://github.com/Celsovicente/ProjetoBiologico",
        tecnologia: "C"
    },
    {
        nome: "ToDoList",
        descricao: "Uma lista que permite adicionar tarefas feito com HTML, CSS e JS",
        link: "https://github.com/Celsovicente/TudoList",
        tecnologia: "HTML, CSS e JavaScript"

    },
    {
        nome: "Gestão de Consultório Médico",
        descricao: "Sistema de Gestão de Um Consultório Médico",
        link: "https://github.com/Celsovicente/GestaoConsultorioMedico",
        tecnologia: "Java"
    }
];

const nome = meusProjetos.map( n => n.nome);
const filtro = meusProjetos.filter(n => n.tecnologia === "C");
const filtro2 = meusProjetos.filter( n => n.tecnologia === "Java");
const encontrar = meusProjetos.find(n => n.nome == "ToDoList");
const ifExists = meusProjetos.some(n => n.tecnologia == "JavaScript")
const todos = meusProjetos.every(n => n.link !== "");
const contar = meusProjetos.reduce(
    (cont) => {
        return cont + 1;
},0)

const countJava = filtro2.reduce(
    (soma) => {
        return soma + 1;
}, 0)

const projeto = [
    ...meusProjetos,
    {
        nome: "Cassino",
        descricao: "Simulação de um Cassino",
        link: "https://github.com/Celsovicente/Fundamentos1",
        tecnologia: "C"
    }
]

const juncao = meusProjetos.filter(n => n.tecnologia == "HTML, CSS e JavaScript")
const jun = juncao.map(n => n.nome)

console.log(nome);
console.log(filtro);
console.log(filtro2);
console.log(encontrar);
console.log(ifExists);
console.log(todos);
console.log(contar);
console.log(countJava);
console.log(projeto);
console.log(juncao);
console.log(jun);





