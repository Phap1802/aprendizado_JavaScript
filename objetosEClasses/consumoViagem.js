/*Colocar conhecimento em pratica*/

/*

    O Que é um objeto ? 
    R: é um conjunto dinamico de chave e valores. 

    O que é uma classe ? 
    R: é um molde para criar um objeto seguindo a definição imposta na quela classe.

    O que é um metodo ? 
    R: proposta diferente mas é uma função dentro de um objeto ou classe. onde ira receber parametros de acordo com os valores deste "this" objeto ou classe.

    O que é uma instancia ? 
    R: é a ocorrencia do objeto, e quando usamos a classe para moldar e criar um objeto. atribuindo valores.

*/



/*
  Part 1 - "Garagem"  crie classe carros e instancie os objetos sendo os carro que tem na garagem nela
  Part 2 - De funcionalidades atribuindo metodos com proposito (exemplo calculo de gasto de viagem - com valores dinamicos que pdoem ser atualizado direto). 
  
  
*/


class Carro {

    modelo;
    ano;
    cor;
    consumoGasolinaCidade;
    consumoEtanolCidade;
    consumoGasolinaEstrada;
    consumoEtanolEstrada;

    //construtor e um metodo especial que faz atribuição dos valores / parametros recebidos quando um objeto e instanciado a uma classe. 
    constructor (modelo, ano, cor, kmGasolinaCidade, kmEtanoCidade, kmGasolinaEstrada, kmEtanolEstrada){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.consumoGasolinaCidade = kmGasolinaCidade;
        this.consumoEtanolCidade = kmEtanoCidade;
        this.consumoGasolinaEstrada = kmGasolinaEstrada;
        this.consumoEtanolEstrada = kmEtanolEstrada;      
    }
}

// Criando objetos com base no molde/classe Carro.
//Carros na Garagem (Banco de Dados)
const pg208 = new Carro ('Peugeot 208', 2021, 'Azul', 10.9, 7.5, 13.1, 9);
const onix = new Carro ('Onix Turbo', 2020, 'Preto', 13.9, 9.9, 16.7, 11.7);



 

// Função para calcular Custo  da viagem com base no seu tipo;

function calcularCustoViagem (pg208, onix) {

    let cont1 = 1;
    while (cont1 = 1) {
        //escolher um carro da garagem.
        let cont2 = 1;
        while  (cont2 === 1) {
            let carroEscolhido = parseInt(prompt(`Digite o que será usado ! /n 1 = Peugeot208 ou 2 = Onix `));
            if (carroEscolhido === 1) { carroEscolhido = pg208; cont2= 2 } 
            else if (carroEscolhido === 2) { carroEscolhido = onix; cont2= 2}
            else { console.log('O numero digitado não corresponde aos carro da garagem, por favor, tento novamente!');}
        }

        //Solicitar Informações
        //Quantos Km vai Rodar ?
        let kmViagem = parseFloat(prompt(`Digite quantos KM vai rodar ( "apenas numero" ):  `));
        
        //Qual valor atual Gasolina ?
        let valorGasolina = parseFloat(prompt(`Digite o valor atual da Gasolina ( "apenas numero" ):  `));

        //Qual valor atual do Etanol ?
        let valorEtanol = parseFloat(prompt(`Digite o valor atual do Etanol ( "apenas numero" ):  `));

        //escolher tipo de viagem.
        let cont3 = 1;
        while  (cont3 === 1) {
            let tipoViagem = parseInt(prompt(`Digite qual o tipo da viagem ! 
                1 = Cidade ou 2 = Estrada `));
            if (tipoViagem === 1) { console.log(`Você selecionou tipo Cidade !!!`); cont3 = 2 } 
            else if (tipoViagem === 2) { console.log(`Você selecionou tipo Estrada !!!`); cont3 = 2}
            else { console.log('o numero digitado não corresponde aos  tipo de viagem, por favor, tento novamente!');}
        }

        //calculo do custo de viagem
        if (tipoViagem === 1){
                const valorViagemCidadeGasolina = valorGasolina * (kmViagem / carroEscolhido.consumoGasolinaCidade);
                const valorViagemCidadeEtanol = valorEtanol * (kmViagem / carroEscolhido.consumoEtanolCidade);
                console.log(`A viagem de ${kmViagem} Kilometros, do tipo "Cidade", feita no ${carroEscolhido.modelo}, vai custar R$ ${valorViagemCidadeGasolina.toFixed(2)} com Gasolina, ou, R$ ${valorViagemCidadeEtanol.toFixed(2)} com Etanol. `);
                console.log(`/n A diferença entre eles é R$ ${Math.abs((valorViagemCidadeGasolina - valorViagemCidadeEtanol).toFixed(2))} `);
        } else {
                const valorViagemEstradaGasolina = valorGasolina * (kmViagem / carroEscolhido.consumoGasolinaEstrada);
                const valorViagemEstradaEtanol = valorEtanol * (kmViagem / carroEscolhido.consumoEtanolEstrada);
                console.log(`A viagem de ${kmViagem} Kilometros, do tipo "Estrada", feita no ${carroEscolhido.modelo}, vai custar R$ ${valorViagemEstradaGasolina.toFixed(2)} com Gasolina, ou, R$ ${valorViagemEstradaEtanol.toFixed(2)} com Etanol. `);
                console.log(`/n A diferença entre eles é R$ ${Math.abs((valorViagemEstradaGasolina - valorViagemEstradaEtanol).toFixed(2))} !!! `);
                console.log(`/n /n /n /n /n ------------------------------------------------------------`);
        } 

        //Uma pausa para pressionar qualquer tecla antes de passar as demais opções.
        console.log("------- Pressione Qualquer Tecla para Continuar ! --------- ");

        // Verificando se o usuario quer fazer nova pesquisa de preço. 
        let cont4 = 1;
        while (cont4 === 1) {
            console.log(`/n /n Desejá Fazer nova pesquisa ? `);
            const novaPesquisa = ParseInt(prompt(`Digite 1: para "Sim Quero fazer nova pesquisa"  /n ou /n Digite 2: para "Não, obrigado!")`));
            if (novaPesquisa === 1) { console.log("/n /n /n /n ______________________________ "); cont4 = 2;} 
            else if (novaPesquisa === 2){  console.log("/n /n /n Obrigado por usar o meu programa! /n /n /n  "); cont1 = 2; cont4 = 2; }
            else { console.log(`Erro: opção digitada invalida !! tente novamente`)}
        }
    }


}

calcularCustoViagem(pg208, onix);





// ----------------------------------------------------------------------------------

