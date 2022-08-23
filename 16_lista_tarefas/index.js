const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const Tarefas = document.querySelector('.tarefas');

function criali(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criatarefa(inputTarefa.value)
    }
}) // Evento

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criabtnapagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar esta tarefa')
}

function criatarefa(textoInput){
  const li = criali();
  li.innerText = textoInput;
  Tarefas.appendChild(li);
  limpaInput();
  criabtnapagar(li);
  salvartarefas();
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criatarefa(inputTarefa.value)
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('apagar')){
        // console.log(el.parentElement); // Exibe o pai do elemento
        el.parentElement.remove();
    }
});

function salvartarefas(){
    const litarefas = Tarefas.querySelectorAll('li');
    //console.log(litarefas);
    const listaTarefas = [];

    for(let Tarefas of litarefas){
        let tarefatexto = Tarefas.innerText;
        tarefatexto = tarefatexto.replace('Apagar', '').trim();
        console.log(tarefatexto)
        listaTarefas.push(tarefatexto)
    }

    console.log(listaTarefas);
}