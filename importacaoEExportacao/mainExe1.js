/*  
    MAINEXE1.JS PRATICANDO IMPORTAÇÃO DO ARQUIVO EXE1.JS

    1) Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100  Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numeor sorteado.

    Dados de entrada: 
    5
    50
    10
    98
    23

    Saida:
    98


*/
const {gets, print} = require ('./exe1.js');

let maiorValor = 0;



for (let i = 0; i < 5; i++){

        const numeroSorteado = gets();

        if ( numeroSorteado > maiorValor ){
            maiorValor = numeroSorteado;
    
        }

}

print(maiorValor);





