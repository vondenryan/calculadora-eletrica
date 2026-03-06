let conversionTable = {
    "G": 1**9,
    "M": 1**6,
    "k": 1**3,
    "base": 1,
    "m": 10**-3,
    "µ": 10**-6,
    "n": 10**-9,
    "p": 10**-12
}

function conversionMain() {
    let origin_unity = parseInt(prompt("Digite a unidade de origem: "));
    let destiny_unity = parseInt(prompt(
        "1. G - 2. M",
        "\n3. k - 4. Base",
        "\n5. m - 6. µ",
        "\n7. n - 8. p",
        "\nDigite a unidade de destino: "

    ));
    let value = parseInt(prompt("Digite o valor: "))

    conversion(origin_unity, destiny_unity, value)
}

function conversion(origin, destiny, value) {
    let baseValue, convertedValue

    if(!conversionTable[origin] || !conversionTable[destiny]) return

    baseValue = baseValue * conversionTable[origin]
    convertedValue = baseValue / conversionTable[destiny]

    console.log(convertedValue, ` ${destiny}`)
}