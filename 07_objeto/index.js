const pessoa ={
    nome: 'Luiz',
    sobrenome: 'Carlos',
    idade: 24,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi... eu tenho ${this.idade}`);
       
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa.fala(); pessoa.incrementaIdade();
pessoa.fala(); pessoa.incrementaIdade();
pessoa.fala(); pessoa.incrementaIdade();
pessoa.fala(); pessoa.incrementaIdade();
pessoa.fala(); pessoa.incrementaIdade();


/*
function criarobj(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade
    };
}

const pessoa1 = criarobj('Luiz','Carlos', 25);
const pessoa2 = criarobj('Maria','Oliveira', 27);
const pessoa3 = criarobj('Helena','Souza', 37);
const pessoa4 = criarobj('Livia','Atsumuda', 32);

console.log("\n",pessoa1,"\n", pessoa2,"\n", pessoa3,"\n", pessoa4,"\n",);




const pessoa ={
    nome: 'Luiz',
    sobrenome: 'Carlos',
    idade: 25
};

console.log(pessoa.nome);

*/