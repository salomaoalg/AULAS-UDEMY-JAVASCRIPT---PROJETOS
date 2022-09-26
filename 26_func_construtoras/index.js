function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log('Me chamou, estou aqui sua assistente', this.nome)
    }
}

const p1 = new Pessoa('João', 'Carlos');
const p2 = new Pessoa('Maria', 'Joaquina');
const p3 = new Pessoa('Verônica', 'Souza');

console.log(p1.nome,"e", p2.nome)
console.log(p2.sobrenome, p1.sobrenome)
p3.metodo();


