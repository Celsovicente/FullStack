const informacao = '{ "firstname" : "Celso", "lastName" : "Vicente", "idade": "22" }'
const pessoa = JSON.parse(informacao)

console.log(pessoa.idade);
console.log(pessoa.firstname);
console.log(pessoa.lastName);


