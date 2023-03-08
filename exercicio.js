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

function NumeroParadas(passageiros, tempoViagem) {
    let adulto = 0
    let crianca = 0
    
    passageiros.forEach(passageiro => {
        if (passageiro == "adulto") {
            adulto++
        }else if (passageiro == "crianca") {
            crianca ++
        }
    });

    let tempoParada = 0
    if (adulto > 0 && crianca == 0) {
        tempoParada = 90
    }else if (adulto > 0 && crianca > 0 && adulto >= crianca) {
        tempoParada = 60
    }else if (adulto < crianca) {
        tempoParada = 40
    }

    let quantidadeParada = Math.ceil((tempoViagem * 60)/tempoParada)
    return quantidadeParada
}
const quantidadeParada = NumeroParadas(["adulto", "adulto", "crianca"], 9);
console.log("Nessa viagem terao", quantidadeParada,  "paradas.");

function GastoRefeicao(qntdParada, passageiros) {
    let refeicao = Math.floor(qntdParada / 3)
    let completa = 0
    let leve = 0
    let total = 0
    
    if (qntdParada % 3 == 0) {
        completa = refeicao
        leve = refeicao * 2
    }else if (qntdParada % 3 == 1) {
        completa = refeicao + 1
        leve = refeicao * 2
    }else if (qntdParada % 3 == 2) {
        completa = refeicao + 1
        leve = (refeicao * 2) + 1
    }

    for (let index = 0; index < passageiros.length; index++) {
        if (passageiros[index] == "crianca") {
            let valorCrianca = (40 * completa) + (20 * leve)
            total += valorCrianca 
        }else if (passageiros[index] == "adulto") {
            let valorAdulto = (50 * completa) + (30 * leve)
            total += valorAdulto
        }
    } 
    return total
}
module.exports = {GastoRefeicao}
console.log(GastoRefeicao(5,["adulto", "adulto", "crianca"]))
