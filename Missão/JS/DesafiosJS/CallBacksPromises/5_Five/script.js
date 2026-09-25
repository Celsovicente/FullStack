const promessa = new Promise((resolve , reject) =>{
    setTimeout(() => {
        reject("Recusando a Promise");
    }, 2000);
});

promessa.catch((r) =>{
    console.log(r);
})