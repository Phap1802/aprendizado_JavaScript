/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de deizer o valor do seu IMC (IMC = peso / (altura*altura));

    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

*/

class Pessoa {

    nome;
    peso;
    altura;

    constructor (nome, peso, altura){

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

        }

    calcularImc () {

        return this.peso / Math.pow(this.altura, 2);
                
    }

    classificar(){

        if (this.calcularImc() < 18.5) {

            return 'Abaixo do peso';
        
        } else if( this.calcularImc() >= 18.5 && this.calcularImc() < 25) {
        
            return 'Peso normal';
                
        } else if(this.calcularImc() >= 25 && this.calcularImc() < 30) {
        
            return 'Acima do Peso';
        
        } else if(this.calcularImc() >= 30 && this.calcularImc() < 40) {
        
           return 'Obeso';
        
        } else {
        
            return 'Obesidade Grave';
        }
        



    }
}

const jose = new Pessoa('José', 70, 1.75);
const paulo = new Pessoa('Paulo', 93, 1.80);

console.log(`${jose.nome} tem o IMC de: ${jose.calcularImc().toFixed(2)}, segundo este resultado ${jose.nome} está ${jose.classificar()} `);

console.log(`${paulo.nome} tem o IMC de: ${paulo.calcularImc().toFixed(2)}, segundo este resultado ${paulo.nome} está ${paulo.classificar()}` );





