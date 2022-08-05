//Comentar partes do código para testar separadamente!!!


function soma(X, Y){
    if(typeof X !== 'number'|| typeof Y !== 'number'){
        throw new Error('X e Y precisam ser numeros');
    }

    return X + Y;
}

try{
    console.log(soma('1',2));
}
catch(error){
    console.log(error); // Local/Variavél onde fica o erro exibido pelo JavaScript
    console.log('Houve um problema com o sofware, informar o setor de T.I');
}


// Estrutura com finnaly
function retornaHora(data){
    if(data &&! (data instanceof Date)){
        throw new TypeError('Esperando instância de date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br',{
        hour: '2-digit' ,
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }) ;
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}
catch(error){
    //Tratativa do erro
}
finally{
    console.log("Não tenha um bom dia, TENHA UMA GRANDE DIA!!!");
}