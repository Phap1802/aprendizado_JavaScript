//ALGORITIMO CORRIGIDO

function gets(valoresEntradas) {


  let maiorValorPar = 0;
  let menorValorImpar = 0;
  //loop para descobrir os numeros par e impar.
  for (let i = 0; i < valoresEntradas.length; i++) {

    if (valoresEntradas[i] % 2 === 0) {
      //se for par verifica se é maior que o ultimo par encontrado.
      if (valoresEntradas[i] > maiorValorPar) {
        maiorValorPar = valoresEntradas[i];
      }
    } else {
      //se for Impar verifica se é menor que o ultimo impar encontrado
      if (menorValorImpar === 0) {
        menorValorImpar = valoresEntradas[i];
      } else if (valoresEntradas[i] < menorValorImpar) {
        menorValorImpar = valoresEntradas[i];
      }
    }
  }



  return `O Maior Valor dos numeros Pares da Lista é o = ${maiorValorPar}  \nO Menor Valor dos numeros Impares é o = ${menorValorImpar}`;

}


function print(texto) {

  console.log(texto);

}

module.exports = { gets, print };



// MEU ALGORITIMO ABAIXO 


/* function gets (valoresEntradas){

  // Separar Pares dos Impares;
  const numerosPar = [];
  const numerosImpar = [];
  //loop para descobrir os numeros par e impar.
  for (let i = 0; i < valoresEntradas.length; i++) {
    
    if (valoresEntradas[i] % 2 === 0) {
      //se for par empurra/ adiciona a lista dos numeros Par
      numerosPar.push(valoresEntradas[i]);
    } else {
      //se for Impar empurra/ adiciona a lista dos numeros Impar
      numerosImpar.push(valoresEntradas[i]);
    }
  }
  
  // Descobrir o maior dos numeros pares
  let maiorValorPar = 0; 
  for (let i = 0; i < numerosPar.length; i++) {
    
    if (numerosPar[i] > maiorValorPar){
      maiorValorPar = numerosPar[i];
    } 
  }  
  
  //Descobrir o menor dos numeros Impares
  let menorValorImpar = 999999999999;
  for (let i = 0; i < numerosImpar.length; i++) {
    if (numerosImpar[i]< menorValorImpar){
      menorValorImpar = numerosImpar[i];
    }    
  }
 
  return `O Maior Valor dos numeros Pares da Lista é o = ${maiorValorPar}  \nO Menor Valor dos numeros Impares é o = ${menorValorImpar}`;
 
 }
 
 
 function print (texto){
 
     console.log(texto);
 
 }
 
 module.exports = { gets, print }; */