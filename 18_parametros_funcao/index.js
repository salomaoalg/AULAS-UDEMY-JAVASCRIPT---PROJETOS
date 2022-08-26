function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) { //arguments local onde os valores são armazenados
        total += argumento;          //quando a passagem por parâmetro
    }
    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7);

//===========================//=================

function xfuncao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = { nome: 'Jéssica', sobrenome: 'Pires', idade: 20 };
xfuncao(obj);


function zfuncao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);


}
zfuncao(['Maria Joaquina', 'Cirilo Gomes', 30]);


function conta(operador, acumulador, ...numeros) {
    //console.log(operador, acumulador, numeros);
    for (let numero of numeros) { // of argumentos in indice
        console.log(numero);
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador /= numero;
        if (operador === '/') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('*', 5, 5, 5, 5, 5);