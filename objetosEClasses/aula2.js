/*  Classe > define como sao os atributos de um objeto. para que assim possa fazer instancia 

CLASSE = DEFINIÇÃO DO OBJETO 
INSTANCIA = OCORRENCIA DO OBJETO.

 */


// Criando Classe 
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


//criando INSTANCIA "paulo" da classe "Pessoa" e atribuindo parametros para o METODO "constructor(nome,idade)"
const paulo = new Pessoa('Paulo', 25); 
const renan = new Pessoa('Renan', 50);

// chamando o metado "descrever pela instancia rena/paulo"
renan.descrever();
paulo.descrever();


//----------------------------------------------------------


/*Criando Instancia da classe pessoa, uma classe pode ter varias instancias 
*/
/*
//criando instancia "paulo que é = a classe Pessa()"
const paulo = new Pessoa() 

//adicionando valores nos atributos da instancia de Paulo
paulo.nome = 'Paulo Henrique de Almeida Pinto';
paulo.idade = 25;
paulo.sexo = 'Masculino';


const renan = new Pessoa()

renan.nome = 'Renan de Souza';
renan.idade = 50;
renan.sexo = 'Masculino';


// chamando o metado "descrever pela instancia rena/paulo"
renan.descrever();
paulo.descrever();

*/











