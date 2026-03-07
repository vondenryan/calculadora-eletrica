let option = parseInt(prompt(`
    1. Eletric Calculator
    2. Mult & Sub
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
    default:
        console.log("Invalid option.");
}