//FUNCAO DE COTAÇÃO DO DOLAR
function realParaDolar(real, cotacaDolar){
    return real * cotacaDolar;
}

let valorReal = 7.89;
let cotacao = 5.08;

let total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " + valorReal + "o valor em U$" + total);

//FUNCAO PARA BOTAO
function alertaHello(){
    alert("Olá pessoal");
}