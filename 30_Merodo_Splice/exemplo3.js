            //   -5       -4       -3         -2        -1 // Numeros negativos "RECORTAR O ARRAY"
            //    1        2        3          4         5
            const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

            const removidos = nomes.splice(3, 2, 'Miguel', 'Dos Anjos'); // Realiza uma substituição dos elementos
            console.log(nomes, removidos);

