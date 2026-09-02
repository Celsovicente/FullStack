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


const [ 
    { nome: firstNome, descricao: firstDescription, link: firstLink },
    { nome: secondtName, descricao: secondDescription, link: secondLink },
    { nome: thirdtName, descriacao: thirdDescription, link: thirdLink } 
] = meusProjetos

console.log(firstNome, firstDescription, firstLink);
console.log(secondtName, secondDescription, secondLink);
console.log(thirdtName, thirdDescription, thirdLink);

