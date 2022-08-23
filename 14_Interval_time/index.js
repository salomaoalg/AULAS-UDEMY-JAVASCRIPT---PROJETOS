function mostrarHORAS() {
    let data = new Date();

return data.toLocaleTimeString('pt-br',{
    hour12: false
});
}

const timer = setInterval(function(){
    console.log(mostrarHORAS());
}, 1000); // Tempo Infinito

setTimeout(function(){
    clearInterval(timer);
}, 300000) // Determina uma quantidade de tempo que o código vai funcionar

setTimeout(function(){
    console.log("Hello My Friend!")
}, 5000);


