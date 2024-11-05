


class Carro  {
  
    marca;
    cor;
    kmPorLitro;
    
    constructor (marca, cor, kmPorLitro) {

        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
     }

    valorGastoViagem () {

        const kmViagem = 17;
        const precoCombustivel = 5.60;

        const valorViagem = precoCombustivel * (kmViagem / this.kmPorLitro);
        
        return valorViagem.toFixed(2);
    } 

}

const carro1 = new Carro ('chevrolet','branco',20);
const carro2 = new Carro ('honda', 'preto', 10);



console.log(`O valor gasto para esta viagem com o Carro1 é de R$ ${carro1.valorGastoViagem()} e o valor gasto para esta mesma viagem no Carro2 é de R$ ${carro2.valorGastoViagem()} a diferença desses valores e de ${Math.abs(carro1.valorGastoViagem() - carro2.valorGastoViagem()).toFixed(2)}`)


