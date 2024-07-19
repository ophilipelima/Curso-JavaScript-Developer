class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.cor = cor;
        this.marca = marca;
        this.gastoMedio = gastoMedio;
    }

    gastoEmReais(distanciaKM, precoCombustivel){
        return (distanciaKM * this.gastoMedio) * precoCombustivel;
    }

}

const corolla = new Carro('toyota', 'preto', 1/12);
console.log(corolla.gastoEmReais(70, 5));