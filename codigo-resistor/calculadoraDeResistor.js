//todo Inputs > 4 ou 5 Faixas?; primeira faixa, segunda...

//Modificar para integrar com front
//Ps. Front é horrível

let cores = {
    "Preto": {
        val: 0,
        tolerancia: undefined
    },
    "Marrom": {
        val: 1,
        tolerancia: 1
    },
    "Vermelho": {
        val: 2,
        tolerancia: 2
    },
    "Laranja": {
        val: 3,
        tolerancia: undefined
    },
    "Amarelo": {
        val: 4,
        tolerancia: undefined
    },
    "Verde": {
        val: 5,
        tolerancia: 0.5
    },
    "Azul": {
        val: 6,
        tolerancia: 0.25
    },
    "Violeta": {
        val: 7,
        tolerancia: 0.1
    },
    "Cinza": {
        val: 8,
        tolerancia: 0.05
    },
    "Branco": {
        val: 9,
        tolerancia: undefined
    },
    "Dourado": {
        valFaixa: undefined,
        tolerancia: 5
    },
    "Prata": {
        valFaixa: undefined,
        tolerancia: 10
    }
}

function calcResistor() {
    let qtdFaixas = parseInt(prompt("Resistor de 4/5 Faixas: "))

    switch(qtdFaixas) {
        case 4:
            calcFaixas(4)
            break
        case 5:
            calcFaixas(5)
            break
        default:
            calcResistor()
    }
}

function calcFaixas(faixas) {

}