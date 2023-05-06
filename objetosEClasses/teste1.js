class Pessoa {

nome;
idade;

cosntructor(nome, idade){

    this.nome = nome;
    this.idade = idade;
}

descrever(){

    console.log(`Nome: ${this.nome} e Idade: ${this.idade}`);

}
}

new Pessoa ('Renan', 30).descrever();
