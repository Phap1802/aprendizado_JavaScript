

function gets (media){

   let resultado = " "; 

    if (media < 5 ) {
        return resultado = "Reprovado";
    } 
    else if (media >= 5 && media < 7 ){
        return resultado = "Recuperação";
    } else if (media >= 7 )  {
        return resultado = "Aprovado";
    } else {
        return resultado = "Erro, tente novamente";
    }

}


function print (texto){

    console.log(texto);

}

module.exports = { gets, print };