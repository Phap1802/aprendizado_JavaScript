
/*  Objetos > é uma coleção dinamica de chave que agrupa valores 
 */

// criando objeto ("objeto paulo, composto pelos valores "nome e idade")

/*
const paulo = { 

    nome: 'Paulo Henrique de Almeida Pinto',
    idade: 25,
    sexo: 'Masculino',

    //CRIANDO METODO: (função dentro de objeto = metodo)
    
    descrever: function (){

        // o this identifica o contexto da função que no caso  é um metado
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

        }

}


//Chamando objeto pelo dado: 

console.log(paulo.idade);

//Chamando objeto mostra o que tem dentro do objeto:

console.log(paulo);

//Atribuindo novo valor ao objeto "paulo"

paulo.cor = "Branco";

//FUNÇÃO DENTRO DE OBJETO É CHAMADO DE METODO !!! 
*/


const pessoa = { 

    nome: 'Paulo Henrique de Almeida Pinto',
    idade: 25,
    sexo: 'Masculino',

    //CRIANDO METODO: (função dentro de objeto = metodo)
    
    descrever: function (){

        // o this identifica o contexto da função que no caso  é um metado
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

        }

}

//adicionar valores a função dentro do objeto que é chamado de metado
pessoa.descrever = function(){

    console.log(`Meu nome é : ${this.nome}`)

}

// Outro meio de acessar os atributos do objeto é "pessoa['atributo']"
console.log(pessoa['nome']);



