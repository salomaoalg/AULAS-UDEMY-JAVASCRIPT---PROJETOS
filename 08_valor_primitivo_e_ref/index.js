/* 
Primitivos (imutaveis) STRING, NUMBER, BOOLEAN, UNDEFINED 
NULL (BIGINT, SYMBOL) - Valores copiados.
*/

let a = [1, 2, 3];
let b = [...a]; // Cópia os argumentos do array A sem apontar para o mesmo endereço da momoria
let c = b; // Aponta para o mesmo endereço da momoria

//console.log(a,b);
//a.push(4);
//console.log(a, b);

//b.pop();
//console.log(a, b);

//a.push('Luiz');
//console.log(c);

const cadastro = {
    nome: 'Maria',
    sobrenome: 'joaquina',
};

const cadastro_copia = {...cadastro};

cadastro.nome = 'Cirílo';
cadastro.sobrenome = 'José';

console.log(cadastro);
console.log(cadastro_copia);