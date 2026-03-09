let option = parseInt(prompt(`
    1. Eletric Calculator
    2. Mult & Sub
    3. Resistor
`));

switch(option) {
    case 0:
        break;
    case 1:
        eletric();
        break;
    case 2:
        conversionMain();
        break;
    case 3:
        calcResistor();
        break;
    default:
        console.log("Invalid option.");
}