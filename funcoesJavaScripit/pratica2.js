/*
    Faça uma função que veja se voce é maior de idade; 
*/

function escrevaIdade(idade){

    console.log('Eu tenho  ' + idade + ' anos de idade');

}




function verificarMaiorIdade(idadeMaior) {

    if (idadeMaior >= 18 ){

        console.log('Eu Sou de Maior Idade');
    } else {

        console.log('Eu Sou de Menor Idade');
    }

}

( function main() {


const minhaIdade = 30

escrevaIdade(minhaIdade); 
verificarMaiorIdade(minhaIdade);
   

} )(); 

