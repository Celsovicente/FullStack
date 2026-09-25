// Promise
const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Luanda"), 1000)
});

p.then(cidade => console.log(cidade));

// Reject
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Sem Internet"), 1000)
});

p2.catch(error => console.log("Sem conexão a Internet"), 1000);

// then, catch, finally
function buscarUser(){
    return new Promise(res => setTimeout(() => res({id:1}), 500 ));
}

function buscarPosts(){
    return new Promise(res => setTimeout(() => res(["post1", "post2"])))
}

buscarUser()
.then(user => buscarPosts(user.id))
.then(posts => console.log(posts))
.catch((e) => console.log(e))
.finally(() => console.log("Acabou"))

// Resolve
Promise.resolve("CELSO")
.then(nome => console.log(nome.toLocaleLowerCase()))
.then(nomeMaiusculo => console.log(nomeMaiusculo));

// Resolve
let loading = true;
Promise.resolve("Dados")
.then(d => console.log(d))
.finally(() => {  loading = false; console.log("Loading off")  });



// Exercício 1
const nome = "Celso"
Promise.resolve(nome)
.then(r => console.log(r.length))
.catch(erro => console.log("Erro"))
.finally(() => console.log(`Olá ${nome}`))

const n = -12
Promise.reject(n)
.then(r => console.log("Foi aceite"))
.catch(r => console.log("O valor não deve ser nulo"))
.finally(() => console.log("Bem Vindo"))


// 3º
function buscarUser(){
    return new Promise(res => setTimeout(() => res({id:1}), 500 ));
}

buscarUser()
.then(user => buscarUser({id:1}))
.catch(erro => console.log("Erro"))
.finally(() => console.log("Algo novo"));

let numero = 10
Promise.resolve(numero)
.then( l => console.log(l))
.catch(erro => console.log("Erro"))
.finally(() => console.log("Versão final"))

.then( l => console.log(l))
.catch(erro => console.log("Erro 2"))
.finally(() => console.log("Versão final 1"))
