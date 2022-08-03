function escopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function eventoform(evento) {
        evento.preventDefault();
        const hora = form.querySelector('.hora');
        resultado.innerHTML += ` <p>BOM DIA :${hora.value}</p>`
        
        if (hora < 12) {
            resultado.innerHTML += ` <p>BOM DIA :${hora.value}</p>`
        }
        else if (hora >= 12 && hora <= 18) {
            resultado.innerHTML += ` <p>BOA TARDE :${hora.value}</p>`
        }
        else if (hora >= 18 || hora <= 00) {
            resultado.innerHTML += ` <p>BOA NOITE :${hora.value}</p>`
        }
        else {
            resultado.innerHTML += ` <p>HORA NÃO VALÍDA! :${hora.value}</p>`
        }
    }

    form.addEventListener('submit', eventoform)

}
escopo();



