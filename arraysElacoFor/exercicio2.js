// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado. 

const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 1; i <= numerosPares.length; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}