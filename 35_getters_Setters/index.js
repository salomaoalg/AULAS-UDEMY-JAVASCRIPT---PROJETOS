function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumera: true, // MOSTRA A CHAVE
        configurable: true, // CONFIGURAVÉL
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Valor Ruim');
                return;
            }

            estoquePrivado = valor;
        }
    }); 
}

const p1 = new Produto('Camiseta', 20,3);
p1.estoque = 747;
console.log(p1)
console.log(p1.estoque);