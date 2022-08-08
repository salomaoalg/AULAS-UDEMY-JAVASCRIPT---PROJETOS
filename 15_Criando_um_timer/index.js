function relogio(){

    function mostrarHORAS(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    //const iniciar = document.querySelector('.iniciar');
    //const pausar = document.querySelector('.pausar');
    //const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;


    function iniciarelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = mostrarHORAS(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0
        }
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            iniciarelogio();
        }
        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer);
        }
    });
}

relogio();

