
/*Funções são caixas que guarda pequeno trecho de codigo  que pode ser chamada  a qualquer hora ! 

sinta-se  "function teste(){

}

FUNÇÕES PODE SER VISTA COMO ENCAPSULAMENTOS 

*/


/*
function quadrado(valor) {

   return valor*valor;
     (O RETURN VAI DAR UM RETRONO PARA O "QUADRADO(10)" DE ACORDO COM O CALCULO )

}

const quadradoDeDez = quadrado(10);

console.log(quadradoDeDez); (IMPRIME 100)

*/


/* Programa para acrescentar juros por função : 


function incrementarJuros(valor, percentualJuros){

    const valorDeAcrecimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrecimo;

}

console.log(incrementarJuros(100, 10));  */


/*function calcularJuros() {



}



function main() {

    console.log('Programa principal');
    calcularJuros(); 


}

main(); */

/* IMC COM FUNÇÕES*/


function calcularImc(peso, altura) {

    return  peso / Math.pow(altura, 2);

}


function classificarImc(imc) {


    if (imc < 18.5) {

        return "Abaixo do peso";
    
    } else if(imc >= 18.5 && imc < 25) {
    
        return "Peso normal";
    
    } else if(imc >= 25 && imc < 30) {
    
        return "Acima do Peso";
    
    } else if(imc >= 30 && imc < 40) {
    
        return "Obeso";
    
    } else {
    
        return "Obesidade Grave"
    }
    

}

// Main = nosso codigo principal.
(function main(){


    const   peso = 60;
    const   altura = 1.80;
    const imc = calcularImc(peso, altura);
    
    console.log(classificarImc(imc));
    
})();
/*Função imediatamente invocada, cria e se executa quando coloca parente entre a função para dar prioridade, e chamando logo as seguir com "();" 

realiza bastante onde precisa de codigo que executa 1 vez só. 
*/ 





main();






/* Funções tende a ser valores no JS, pode ser usado como variavel

function main(x){
    return X;
}

console.log(main(10))

main2 = main(10);

console.log(main2);

"main2 imprime 10"  



*/









