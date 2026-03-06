function conversion() {
    let unity = prompt("A (Ampère) - I (Volt) - Ω (Ohm) - W (Watt) - V (Volt)\nDigite a grandeza:");
    //let convertTo = parseInt(prompt("Converter para: "));
    let value = parseFloat(prompt("Digite o valor: "));

    value *= 1000

    console.log(`${value} m${unity}`)
}
