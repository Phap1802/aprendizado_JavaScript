/*

    1) Crie uma classe para representar carros.

    Os Carros possuem uma marca,
    Uma cor,
    E um gasto médio de combustivel por km rodados, 

    Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.
    
 */

    class Carro {

        nome;
        marca;
        cor;
        gastoMedioPorKm;



        constructor(nome, marca, cor, gastoMedioPorKm){

            this.nomeCarro = nome;
            this.marcaCarro = marca;
            this.cor = cor;
            this.gastoMedioPorKm = gastoMedioPorKm;

        }


       

        calculoPrecoViagem (kmViagem, precoGasolina){

             
            // calcula o valor gasto da viagem
            return   precoGasolina * ( kmViagem/this.gastoMedioPorKm);

        }

        
    }





   

      //CRIANDO INSTANCIA CARRO "APELIDEI MEU CARRO DE BAGUELA MAS ELE É UM ONIX"
      const banguela = new Carro ('Banguela','chevrolet', 'preta', 1 / 13 );

     

      console.log(`Para esta viagem o ${this,banguela.nome}vai gastar o equivalente a: ${banguela.calculoPrecoViagem(70, 5).toFixed(2)}`);



        



   

   