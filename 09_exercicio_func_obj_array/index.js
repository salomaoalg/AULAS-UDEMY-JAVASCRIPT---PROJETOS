function MeuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

   //IIFE
    function recebeEventoForm (evento){
        evento.preventDefault(); // não atualiza o navegador envia form

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        
    }

    form.addEventListener('submit', recebeEventoForm);
}
MeuEscopo();


/*function meuEscopo(){
    const form = document.querySelector('.form');

    form.onsubmit = function(evento){
        alert("HELLO")
        console.log('Enviado')
    };
}

*/