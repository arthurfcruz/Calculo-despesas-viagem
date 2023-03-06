function GastoViagem(distanciaM, combustivel) {
    if (distanciaM <= 0 || typeof distanciaM !== 'number') {
        console.log("a distancia deve ser maior que 0 metros e deve ser um numero")
    }
    
    let consumo
    if (combustivel == "gasolina") {
        consumo = 16
    }else
    if (combustivel == "etanol") {
        consumo = 11
    }else{
        console.log('tipo de combustivel invalido')
    }

    valorViagem = (distanciaM / 1000) / consumo
    console.log(valorViagem)
    return valorViagem
}
console.log(GastoViagem(11000,"etanol"))

function NumeroParadas(passageiros, tempoViagem) {
    let adulto = 0
    let crianca = 0
    let tempoParada = 0
    let quantidadeParada = 0
    
    passageiros.forEach(passageiro => {
        if (passageiro == "adulto") {
            adulto++
        }else if (passageiro == "crianca") {
            crianca ++
        }
    });

    if (adulto > 0 && crianca === 0) {
        tempoParada = 90
    }else if (adulto > 0 && crianca > 0 && adulto >= crianca) {
        tempoParada = 60
    }else if (adulto < crianca) {
        tempoParada = 40
    }

    quantidadeParada = Math.ceil((tempoViagem * 60)/tempoParada)
    return quantidadeParada
}
module.exports = {NumeroParadas}
const quantidadeParada = NumeroParadas(["adulto", "adulto", "crianca"], 9);
console.log("Nessa viagem terao", quantidadeParada,  "paradas.");
