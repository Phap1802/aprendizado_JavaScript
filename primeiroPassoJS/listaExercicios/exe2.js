/*
    2 ) O IMC - Indice de masa Corporal é m critério da Organização Mundia de saude apra dar indicação sobre a condição de peso de uma pessoa adulta.

    Formular do IMC: 
    IMC = peso / ( altura * altura); 

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

    IMC em adultos Condição: 

    - Abaixo de 18.5 "Abaixo do peso";
    - Entre 18.5 e 25 "Peso normal";
    - Entre 25 e 30 "Acima do peso";
    - Entre 30 e 40 "Obeso";
    - Acima de 40 "Obesidade Grave";

*/


const   peso = 60;
const   altura = 1.80;

const imc = peso / (altura * altura);
/* Para potencias mairoes de 2, recomenda-se usar a classe "Math.pow(altura, x);" trocando o x pelo numero do expoente*/

console.log(imc);

if (imc < 18.5) {

    console.log("Abaixo do peso");

} else if(imc >= 18.5 && imc < 25) {

    console.log("Peso normal");

} else if(imc >= 25 && imc < 30) {

    console.log("Acima do Peso");

} else if(imc >= 30 && imc < 40) {

    console.log("Obeso");

} else {

    console.log("Obesidade Grave")
}
