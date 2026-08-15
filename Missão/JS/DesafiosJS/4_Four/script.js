for(let i = 1; i <= 100; i++){
    if(i % 3 == 0)
        document.body.innerHTML += `Fizz ${i} <br/>`
    
    if(i % 7 == 0)
        document.body.innerHTML += `Buzz ${i} <br/>`
       
    if(i % 3 == 0 && i % 7 == 0)
        document.body.innerHTML +=`FizzBazz ${i} <br/>`
}