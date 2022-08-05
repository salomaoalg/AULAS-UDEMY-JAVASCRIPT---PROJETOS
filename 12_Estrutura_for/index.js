
for (let X = 0; X <= 10; X++) {
    console.log([X] + " POSIÇÃO DOS INDICES");
}// For clássico quase a mesma coisa que o c#

const frutas = ["Maçã","Pera","Uva"];
for(let X in frutas){         // [X] Esta lendo a quantidade de indice do Array frutas
    console.log(frutas[X])    // frutas[X] Lê somente os argumentos dentro do Array frutas
}

const pessoas = {
    nome: "Maria",
    sobrenome: "Rosa",
    sexo: 'Feminino'
};

for(let Y in pessoas){
    //console.log(pessoas[Y]); //Somente os argumentos
    console.log(Y, pessoas[Y]); //Passa pelo objeto inteiro
}