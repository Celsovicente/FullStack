setTimeout(() =>{ console.log("A")},0);
Promise.resolve().then(() => console.log("B"));
console.log("C");

// 2º exercício
setTimeout(() => {console.log(1)}, 0);
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => console.log(2));

//while(true) { }