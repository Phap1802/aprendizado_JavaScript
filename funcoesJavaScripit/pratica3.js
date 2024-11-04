


/* Atribua funções nesse programa realizado no outro curso "primeiros passos JS" */


function identificarPagamento(pagamento){

return 'Tipo de pagamento: ' + pagamento;

}


function cobrarPagamento(cobrar, precoE){ 


    if (cobrar === 'A vista Debito'){

        
        let valorAtualizado = precoE - (precoE * (10/100));
        return 'Voce recebeu 10% de desconto, o preço com desconto ficou: ' + valorAtualizado;


    } else if (cobrar === 'A vista Dinheiro ou Pix'){

        
        let valorAtualizado = precoE - (precoE * (10/100));
        return 'Voce recebeu 15% de desconto, o preço com desconto ficou: ' + valorAtualizado;
        
    } else if (cobrar === 'Em 2x'){

        console.log(precoE);
           
    } else if (cobrar === 'Acima de 2x') {

       
        let valorAtualizado = precoE + (precoE * (10/100));
        return 'Voce recebeu 10% de Juros, o preço com juros ficou: ' + valorAtualizado;

    }  
}


( function main() {


    let precoEtiqueta = 100;
    let tipoPagamento = 'A vista Debito';
      
    console.log(identificarPagamento(tipoPagamento));
    console.log(cobrarPagamento(tipoPagamento, precoEtiqueta));
    
    

    } )(); 

/* Ao pausar o video da aula e fazer da minha maneira, ficou  diferente com a correção mostrada na aula, mas cheogu no mesmo resultado */

