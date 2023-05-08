/*  
    EXE1.JS PRATICANDO EXPORTAÇÃO 

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

const entradas = [5,50,10,98,23];
let i = 0;



function gets(){

    const valor = entradas[i];
    i++;
    return valor;

}


function print(texto){

console.log(texto);



}

//EXPORTANDO Funçções gets e print
module.exports = { gets, print};
