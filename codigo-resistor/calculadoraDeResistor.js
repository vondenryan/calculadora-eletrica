let cores = {
    "Preto": {
        val: 0,
        mult: 1,
        tolerancia: undefined
    },
    "Marrom": {
        val: 1,
        mult: 10,
        tolerancia: 1
    },
    "Vermelho": {
        val: 2,
        mult: 100,
        tolerancia: 2
    },
    "Laranja": {
        val: 3,
        mult: 1000,
        tolerancia: undefined
    },
    "Amarelo": {
        val: 4,
        mult: 10000,
        tolerancia: undefined
    },
    "Verde": {
        val: 5,
        mult: 100000,
        tolerancia: 0.5
    },
    "Azul": {
        val: 6,
        mult: 1000000,
        tolerancia: 0.25
    },
    "Violeta": {
        val: 7,
        mult: 1,
        mult: 10000000,
        tolerancia: 0.1
    },
    "Cinza": {
        val: 8,
        mult: undefined,
        tolerancia: 0.05
    },
    "Branco": {
        val: 9,
        mult: undefined,
        tolerancia: undefined
    },
    "Dourado": {
        valFaixa: undefined,
        mult: 0.1,
        tolerancia: 5
    },
    "Prata": {
        valFaixa: undefined,
        mult: 0.01,
        tolerancia: 10
    }
}

function calcResistor(numFaixas, coresFaixas) {
    let valorResistor = ""

    for(let i = 0; i < 3; i++) {
        if(numFaixas == 5) {
            valorResistor += cores[coresFaixas[i]].val
        } else {
            if(i != 2) {
                valorResistor += cores[coresFaixas[i]].val
            }
        }
    }
    
    valorResistor = parseInt(valorResistor) * cores[coresFaixas[3]].mult

    if(valorResistor >= 1_000_000) {
        valorResistor = `${valorResistor / 10**6} MΩ`
    } else if(valorResistor >= 1_000) {
        valorResistor = `${valorResistor / 10**3} kΩ`
    } else {
        valorResistor = `${valorResistor} Ω`
    }

    return `${valorResistor} ±${cores[coresFaixas[4]].tolerancia}`
}