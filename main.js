let option = parseInt(prompt(`
    1. Eletric Calculator
`));

switch(option) {
    case 1:
        eletric();
        break;
    default:
        console.log("Invalid option.");
}