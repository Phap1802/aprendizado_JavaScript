/*  faça um programa para calcular o valor gasto de combustivel em uma viagem 

você tera 3 variaveis. sendo elas:

- 1 preço do combustivel
- 2 valor medio de gasto do carro
- 3 Distancia da viagem em KM. */

let precoCombustivel = 5.79;
let kmPorLitros = 13;
let kmViagem = 101;

let valorGasto = precoCombustivel * (kmViagem/kmPorLitros);

console.log(valorGasto.toFixed(2));

/* o comando  " .toFixed(2) " determina a quantidade de casa decimais após a virgula sera mostrado, mas para isso converte em texto*/


