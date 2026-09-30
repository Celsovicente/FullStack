const objeto =  '{ "firstName": "Celso", "seconthName": "Segunda", "lastName": "Vicente", "age": "22" } '
const pessoa = JSON.parse(objeto)

console.log(pessoa.firstName);
console.log(pessoa.seconthName);
console.log(pessoa.lastName);
console.log(pessoa.age);

