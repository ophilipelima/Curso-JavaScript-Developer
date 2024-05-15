function escrevaMeuNome(nome){
    console.log('Meu nome é ' + nome);
}

function verificarIdade(idade){
    if(idade >=18){
        console.log('Maior');
    }else{
        console.log('Menor');
    }
}
(function main(){
    escrevaMeuNome('Philipe');
    verificarIdade(20);
})();