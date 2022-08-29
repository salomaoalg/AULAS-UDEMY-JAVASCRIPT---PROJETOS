/* function soma(a, b){
    return a + b;
}
console.log(soma(5,2)); // Forma correta de criar uma função

function soma2(a, b){
    console.log(a + b); //Função sem retorno
}

document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
}); // Função para mexer com os eventos

*/

function criapessoa(nome, sobrenome){
    return{nome, sobrenome};
}

const p1 = criapessoa('luiz', 'otávio'); // Chama a fabrica de obj
const p2 = {nome:'João', sobrenome:'Souza'}; // Direto no obj

console.log(p1);
console.log(p2);
console.log(typeof p1);
console.log(typeof p2);

function criamultiplicador(multiplicador){ // Multiplicador recebe o valor passado pelo função criada
    return function(n){ // 'n' Recebe o valor passado pelo cliente
      //  console.log(n);
      //  console.log(multiplicador)
        return n * multiplicador;
    };
}

const duplica = criamultiplicador(5); // passagem de parâmetro
//const triplica = criamultiplicador(2);
//const quadriplica = criamultiplicador(2);

console.log(duplica(2)); //Exibe na tela 
console.log(triplica(2));
console.log(quadriplica(2))


