            //   -5       -4       -3         -2        -1 // Numeros negativos "RECORTAR O ARRAY"
            //    1        2        3          4         5
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, removidos);