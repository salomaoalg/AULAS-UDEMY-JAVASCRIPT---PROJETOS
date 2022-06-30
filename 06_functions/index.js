function soma(x, y){ // Sem valores undefild NaN
    const resultado = x + y
    return resultado;
    console.log("Helloo") // Não é executado!!
}

//Também é possivel function soma(x = 10, y = 15)
const resultado = soma(2 , 2)
console.log(resultado);

const raiz = function(n){
    return n ** 0.5
}

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

//console.log(soma(10,2));
//console.log(soma(12,2));
//console.log(soma(14,2));
//console.log(soma(16,2));


//function saudacao(nome){
    
//  return(`bom dia ${nome}!`);
    //console.log(`bom dia ${nome}!`);
//}

//const variavel = saudacao('Luiz');
//console.log(variavel);
