


//objeto 
/*

//criação de um objeto da forma mais simples 
let pedro = { 
    nome: "pitter",
    idade: 97,
    descrever1: function(){
        console.log("meu nome é " + this.nome + " minha idade é " + this.idade );
    },
    tamanhoDoNariz: 9000
}

//manupulacao de valores do objeto
pedro.glass = true;
delete pedro.idade;
pedro.nome = "joao";
pedro.tamanhoDoNariz = 30;
pedro.glass = false;
pedro.dinheiroNaConta = 300000;
console.log(pedro);
*/



// a classe é o modelo de como a <Pessoa> deve ser, no caso desse exemplo a pessoa so tem nome e idade
// usamos os objetos para dar valores ao modelo, essa forma de programar recebe o nome de orientação a objeto

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    // o construtor serve para atribuir valores como parametros na criação dos objetos
    // os valores podem ser atribuidos separadamente, mas com os construtores fica mais resumido  <exemplo no final do codigo>
    constructor(nome , idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    //funcoes dentro de casses nao necessita da palavra reservada 'function'
    descrever(){
        console.log(`meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
}
//criação de objetos com construtor ¬
let gabriel = new Pessoa('gabriel' , 18);
let fulano = new Pessoa('fulano delcrano' , 15);


compararPessoas(gabriel, fulano);
//função que compara 2 pessoas
function compararPessoas(p1 , p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} e maior que ${p2.nome}`);
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} e  maior que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} sao iguais`);
    }
}   



//atribuição de valores sem construtor 
/*

let juca =  new Pessoa;

juca.nome = 'juca';
juca.idade = 44;


*/

