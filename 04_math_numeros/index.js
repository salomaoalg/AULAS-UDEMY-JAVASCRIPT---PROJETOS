const numero = Number(prompt("INFORME UM NUMERO"));
const numeroTitulo = window.document.getElementById('numero-titulo');
const textodiv = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero; 
textodiv.innerHTML += `<p>Seu numero + 2 é ${numero + 2}</p>`;
textodiv.innerHTML += `<p> ${numero} é inteiro ${Number.isInteger(numero)}</p>`;
textodiv.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}</p>`;
textodiv.innerHTML += `<p> Arrendodado para baixo ${Math.floor(numero)}</p>`;
textodiv.innerHTML += `<p> com duas casas decimais ${numero.toFixed(2)}</p>`;

