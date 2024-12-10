
function gets(valorSalBruto) {

    
    let valorSalLiquido = 0;

    if (valorSalBruto === 0 && valorSalBruto <= 1100.00) {
        return valorSalLiquido = valorSalBruto - (valorSalBruto * 0.05);
    }
    else if (valorSalBruto >= 1100.01 && valorSalBruto <= 2500.00) {
        return valorSalLiquido = valorSalBruto - (valorSalBruto * 0.10);
    }
    else if (valorSalBruto > 2500.00) {
        return valorSalLiquido = valorSalBruto - (valorSalBruto * 0.15);
    }



}


function print(texto) {

    console.log(texto);

}

module.exports = { gets, print };