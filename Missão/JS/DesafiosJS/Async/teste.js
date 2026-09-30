function wait(ms, label){
    return new Promise((resolve) => setTimeout(() => (label), ms))
}

async function sequential(){
    const start = Date.now()
    const a = wait(300, "A")
    const b = wait(300, "B")
    const c = wait(300, "C")
    console.log([a, b, c], `${Date.now - start}ms`)
}

async function parallel(){
    const start = Date.now();
    const [a , b, c] = await Promise.all([
        wait(300, "A"),
        wait(300, "B"),
        wait(300, "C"),
    ])
    console.log([a, b, c], `${Date.now - start}ms`)
}

parallel();
sequential();


async function teste() {
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const resposta = await dados.json();
    console.log(resposta)
}
teste()
