
/* 3) Faça um programa que calcule e imprima o salario a ser transferido para um funcionario. 

Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios.

O Salario a ser transferido é calculado da seguinte maneira:

  Valor bruto do salario   -   percentual de imposto mediante a faixa salarial   +   adicional dos beneficios


 Para calcular o percentual de imposto segue as aliquotas:

 De R$ 0.00 a R$ 1100.00 = 5.00%
 De R$ 1100.01 a R$ 2500.00 = 10.00%
 Maior que R$ 2500.00 = 15.00%


Entradas: 
Salario Bruto = 2000;
adicional Beneficio = 250;


Saida: 
2050.00

*/





const {gets, print} = require("./auxiliarD3.js");

let valorSalBruto = 5000;
let adicionalBeneficio = 250;


print( `O Valor a ser transferido é de R$` + ( gets(valorSalBruto) + adicionalBeneficio).toFixed(2) + `  // Já contando os desconto do Imposto` );