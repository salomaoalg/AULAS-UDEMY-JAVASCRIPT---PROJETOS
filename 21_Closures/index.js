
//Habilidade da Função em Acessar o escopo Lexico
function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao1 = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');
console.dir(funcao1);
console.dir(funcao2);

//console.log(funcao1(), funcao2());