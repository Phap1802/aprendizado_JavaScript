

// Crie um programa que percorra uma lista de numeros e imprima os numeros pares. 


const listaNumeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];


for (let i = 0; i < listaNumeros.length; i++) {
   
   
   let pegarResto = ( listaNumeros[i] %= 2 ); 

   if ( pegarResto !== 0 ) { 

    console.log(i + ' é impar');

   } 
    
}




