function MeuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []

   //IIFE
    function recebeEventoForm (evento){
        evento.preventDefault(); // não atualiza o navegador envia form

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.Value} ${sobrenome.Value} ${peso.Value} ${altura.Value}</p>`;
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