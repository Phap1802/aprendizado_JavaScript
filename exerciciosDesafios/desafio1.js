/* 1 ) Faça um programa que receba a media de um aluno. 
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

Exemplo: 

Entrada = 5.5; 
Saida = "Recuperação" 

*/

const {gets, print} = require("./auxiliarD1");

// media aluno
const mediaAluno = 5.5;

// imprime pela função exportada de impressão
print(`Resultado do Aluno: ` + gets(mediaAluno));