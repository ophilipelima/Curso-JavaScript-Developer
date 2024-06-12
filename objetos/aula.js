const pessoa = {
	nome: 'Philipe Lima',
	idade: 20,

    descrever: function () {
        console.log('Meu nome é ' + this.nome +'e minha idade é ' + this.idade);
    }
};

//pessoa.descrever = function (){
//    console.log('Meu nome é ' + this.nome);
//}

//pessoa.descrever();
//Acessando dinamicamente um atributo específico dentro do objeto
console.log(pessoa['nome']);