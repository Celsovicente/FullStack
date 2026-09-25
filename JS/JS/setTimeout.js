console.log("Começou");
setTimeout(() =>{ console.log("Passaram 3s"); }, 3000);


setTimeout(() =>{ console.log("Olá Mundo")}, 1000);
setTimeout(() =>{ console.log("Olá Mundo")}, 2000);
setTimeout(() =>{ console.log("Olá Mundo")}, 3000);

const id = setTimeout(() => { console.log("Olá Mundo")},5000);
clearInterval(id);

// Semáfero
console.log("Bem Vindo");
    setTimeout(()=>{
        console.log("Teste....");
        setTimeout(() => console.log("Avançando"), 1000)
}, 2000);

// teste
console.log(1);
setTimeout(() => console.log(2),0)
console.log(3);

