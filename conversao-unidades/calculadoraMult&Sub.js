let conversionTable = {
    "G": 9,
    "M": 6,
    "k": 3,
    "base": 0,
    "m": -3,
    "u": -6,
    "n": -9,
    "p": -12
}

function conversionMain() {
    console.log("Unidades disponiveis:\nG - M - k - base - m - u - n - p");
    let origin_unity = prompt("Unidade origem (deixe vazio para base):") || "base";
    let destiny_unity = prompt("Unidade destino (deixe vazio para base):") || "base";
    let magnitude = prompt("Digite a grandeza: ");

    let value = parseInt(prompt("Digite o valor: "));
    let convertedVal = conversion(origin_unity, destiny_unity, value);

    if(!convertedVal) return;

    console.log(`${convertedVal} ${destiny_unity === "base" ? "" : destiny_unity}${magnitude}`);
}

function conversion(origin, destiny, value) {
    let from, to;

    if(conversionTable[origin] == undefined || conversionTable[destiny] == undefined) {
        console.log("Unidade Inválida!");
        return;
    }

    from = conversionTable[origin];
    to = conversionTable[destiny];

    return value * (10 ** (from - to));
}