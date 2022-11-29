function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome;

    Object.freeze(this) // Nada neste objeto POR ATGUMENTO NÃO SERA MUDADO!!!!
}

const p1 = new Pessoa('Salomao','Souza');
delete p1.nome;

const p2 = new Pessoa('Maria', 'Joaquina');
p2.nome = 'Joaquim'

console.log(p1);
console.log(p2);
