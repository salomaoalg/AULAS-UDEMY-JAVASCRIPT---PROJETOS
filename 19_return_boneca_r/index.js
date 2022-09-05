function criaMultiplicador(multiplicador){ // argumento passado pela função
    return function (n){
       // n argumento passado pelo console 
       
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(4);
const quadriplica = criaMultiplicador(8);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
