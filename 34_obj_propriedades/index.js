function Produto(nome, preco, estoque){
    this.mome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumera: true, // MOSTRA A CHAVE
        value: estoque, // VALOR
        writable: false, // PODE ALTERAR VALOR
        configurable: true // CONFIGURAVÉL
    }); 
}

const p1 = new Produto('Camiseta', 20,3);
p1.estoque = 100000;
console.log(p1);