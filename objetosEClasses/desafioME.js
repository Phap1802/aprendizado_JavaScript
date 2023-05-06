/*
    ESTE SE TRATA DE UM DESAFIO PROPRIO PARA TESTAR MEUS CONHECIMENTOS ADIQUIRIDOS E PARA FIXAR MELHOR O CONCEITO DE OBJETOS CLASSE INSTANCIAS METODOS.

    Para este desafio peguei um exercicio criado nas primeiras aulas e tentei replicar usando funções classe e metodo e instancias. 


    3 ) Crie uma Classe "pessoa" com os atributos (nome, idade).
    Essa pessoa criada teve 2 notas compondo o bimestre, nota 1 e nota 2.  
        Crie um metodo para calcular a media bimestral dessa pessoa. 
        Crie um metodo para verificar se essa pessoa ou reprovol ou fico de recuperação. 


*/

class Pessoa {

    nome;
    idade;

    constructor(nome, idade){

        this.nome = nome;
        this.idade = idade;
    }
    
    calcularMedia(nota1, nota2){

       return (nota1 + nota2) /2;
        
    }

    classificarAluno(nota1, nota2) {


        const not1 = nota1;
        const not2 = nota2;
        const media = (not1 + not2)/2; 
              
        
            // TENTEI puxar diretamente o metodo "this.calcularMedia()" mas nao puxava nenhum valor de la imprimia no fim o "NaN", tentei verificar mas nao consegui, entao fiz destas outra forma. 
        if ( media < 5){

            return 'Reprovado';
        
        } else if (media >= 5 && media <= 7){
        
            return 'Recuperação';
        } else {
        
            return 'Aprovado';
        
        }

    }
   
}

const paulo = new Pessoa ('Paulo H.', 12);

console.log(`A Media de ${paulo.nome} é ${paulo.calcularMedia(8, 5)}, desta forma ele(a) esta ${paulo.classificarAluno(8, 5)}`); 






