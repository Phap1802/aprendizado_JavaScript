/*  faça um programa para calcular o valor gasto de combustivel em uma viagem 

você tera 5 variaveis. sendo elas:

' - Preço etanol;
2 - Preço Gassolina;
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - Distancia em KM da viagem; */

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let kmPorLitros = 10;
let kmViagem = 100;
let valorGasto;

let tipoCombustivel = "Etanol";

if (tipoCombustivel === "Etanol"){

    let valorGasto = precoEtanol * (kmViagem/kmPorLitros);
    console.log(valorGasto.toFixed(2));

} else {

    let valorGasto = precoGasolina * (kmViagem/kmPorLitros);
    console.log(valorGasto.toFixed(2));

}








