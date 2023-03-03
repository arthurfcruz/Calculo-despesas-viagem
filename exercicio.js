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
module.exports = {GastoViagem}
console.log(GastoViagem(11000,"etanol"))