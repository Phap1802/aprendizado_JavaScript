



/* uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100,
 faça um programa que receba os  5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada: 
5,
50,
10,
98,
23.


Saida: 98. 

*/

//importando funções do "treinoExe1" por meio do objeto destruction. 
const {gets, print, sortear, numeroSorteados } = require('./autoDesafio1');


  




print(`Dos numeros de 1 a 100, os 5 numeros sorteados foi:  ${sortear()} !!!`);
print(`O maior valor entre os numeros sorteados é: ` + gets(numeroSorteados));



