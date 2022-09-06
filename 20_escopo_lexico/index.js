const nome = 'Luiz';

function falaNome() {
    console.log(nome);

}

function usaFalaNome() {
    const nome = 'Otavio'
    falaNome();
}
usaFalaNome(); // Sera exibido Luiz
// O escopo sempre vai lembrar a sua origem
// Por tanto Luiz é o principal e o resto é seus vizinhos