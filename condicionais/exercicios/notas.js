let nota1 = 6.6;
let nota2 = 7.7;
let nota3 = 8.3; 

let media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log("Reprovado");
} else if(media > 5 && media < 7){
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}
