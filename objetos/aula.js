class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log('Meu nome é ' + this.nome +'e minha idade é ' + this.idade);
    }
}

const philipe = new Pessoa('Philipe', 20);
const eva = new Pessoa('Eva', 52);

console.log(eva);