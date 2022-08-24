
//Tratamento de dados de 1° Classe
//Function hoisting 
//Exemplos de Criação de funções
const dados = function(){
    console.log('Sou um dado');
};

//Outra forma com function

function inicia_funcao(funcao){
    console.log('Executar Função');
    funcao();
}

//Uma função pode iniciar outra função
inicia_funcao(dados);

//Arrow function ECMA 6
const funcaoArrow = () => {
    console.log('Sou um function arrow')
}
funcaoArrow();


//Dentro de um objeto
const objeto = {
    falar(){
        console.log('Estou falando [...]');
    }
};
objeto.falar();