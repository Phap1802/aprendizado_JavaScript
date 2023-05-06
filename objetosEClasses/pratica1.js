
// Criando Classe Pesoa
class Pessoa {

    nome;
    idade;

    //METODO contructor, faz com que sempre uma pessoa for instanciada ela pega esse parametros. exp: ( "const paulo = new Pessoa('paulo',25)")
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


    //CRIANDO METODO: (função dentro de objeto = metodo)
    descrever() {
        // o this identifica o contexto da função que no caso  é um metado
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        
    }

}
//faça uma função que pegue 2 pessoas e ve quem é mais velho
//observação: essa função recebe um objeto p1 e p2 como parametros.
function compararPessoas(p1,p2){

    if(p1.idade > p2.idade) {

            console.log(`${this,p1.nome} é mais velha do que a ${this,p2.nome}`)
    } else if (p2.idade > p1.idade) { 
            console.log(`${this, p2.nome} é mais velha do que a ${this, p1.nome}`)

    } else {

        console.log(`${this, p1.nome} tem a mesma idade que  ${this, p2.nome}`)
    }

}

const paulo = new Pessoa('Paulo', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(paulo, renan);

