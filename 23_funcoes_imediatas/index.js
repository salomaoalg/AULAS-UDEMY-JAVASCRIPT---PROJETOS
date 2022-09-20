(function(idade, peso, altura){ // IIFE -> IMMEDIATELY ONVOKED FUNCTION EXPRESS // FUNÇÕES IMEDIATAS!

    const sobrenome = 'Souza';
    function CriaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(CriaNome('Melinda'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(30, 80, 1.80);


/* ESTRUTURA

(function() {

})();

*/