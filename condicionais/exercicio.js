const valorGasolina = 4.50;
const valorEtanol = 2.50;
const tipoCombustivel = "Gasolina";
const kmPorLitro = 10;  
const distanciaKM = 100;
let valorGasto;
const litrosConsumidos = distanciaKM / kmPorLitro;

if(tipoCombustivel === "Etanol"){
    valorGasto = litrosConsumidos * valorEtanol;
    console.log(valorGasto.toFixed(2));
} else if(tipoCombustivel === "Gasolina") {
    valorGasto = litrosConsumidos * valorGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    console.log("Inválido");
}
