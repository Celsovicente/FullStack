// 1 - saudar
function sauda(nome, callback){
    setTimeout(() =>{
        const mensagem = `Adeus, ${nome}`
        callback(mensagem);
    }, 1000);
}

sauda("Celso", (res) => console.log(res));



function somar(a, b, callback){
    setTimeout(() =>{
        const resultado = a + b;
        callback(resultado);
    }, 3000)
}

function quociente(a, b, callback){
    setTimeout(() =>{
        const resultado = a / b;
        callback(resultado);
    }, 4000);
}

function resto(a, b, callback){
    setTimeout(() =>{
        const result = a % b;
        callback(result)
    }, 5000);
}

function multiplicar(a, b, callback){
    setTimeout(()=>{
        const produto = a * b;
        callback(produto);   
    }, 2000);
}

function login(user, callback){
    setTimeout(() =>{
        const log = {user: user, mensagem: "Ok"}
        callback(log);
    },6000)
}

multiplicar(3,5, (total) => console.log(total));
somar(3,2, (r) => console.log(r));
quociente(9, 5, (resultado) => console.log(resultado));
resto(10,2, (r) => console.log(r));
login("Celso", (r) => console.log(r))