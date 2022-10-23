function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function contar() {
    cont = 0;
    
    async function main() {
        
        while (cont < 10) {
            cont++;
            document.querySelector('.contagem').textContent = cont;
            await sleep(1000);
            //console.log(cont);
        }
    }
    main();

}
contar();