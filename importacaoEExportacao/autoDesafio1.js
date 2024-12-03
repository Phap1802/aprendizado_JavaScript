
 
 //criando lista vazia que vai guarda os numeros osrteados
  const numeroSorteados = [];
  
 function sortear (){

    //função que gera lista de 1 a 100
    function numerarDeZeroaCem (){

        const listaGeral = [];
        for (let i = 1; i <= 100; i++) {
          //acrescenta 1 numero a lista. 
          listaGeral.push(i);
          
        }
      
        //imprime a lista
        console.log(listaGeral);
      
        return listaGeral;
        
      }


    const listaCemItem = numerarDeZeroaCem(); 
    //loop para sortear 5 numeros e colocar na lista "numerosSorteados"
    for (let i = 0; i <= 5 ; i++) {

        numeroSorteados.push(parseInt((Math.random()*listaCemItem.length).toFixed(0)));

    
    } 

    

    return numeroSorteados; 


 };

 //pega o maior valor dos numeros sorteados.
 function gets (numerosSorteados) {

   
    let numeroMaior = 0;
    
    for (let i = 0; i < numerosSorteados.length; i++) {
        
        if (numerosSorteados[i] > numeroMaior ) {

                numeroMaior = numerosSorteados[i];

        } 

    }

    return numeroMaior;

    

 }

 function print (texto) {

    
    console.log(texto);

 }


 module.exports = { gets, print,  sortear, numeroSorteados};


