const prompt = require("prompt-sync")();

let numeroSecreto = 7;
let tentativa;
let tentativas = 0;

while (tentativa != numeroSecreto) {
    tentativa = Number(prompt("Digite um número: "));
    tentativas++;
    if (tentativa == numeroSecreto) {
        console.log("Você acertou!");
        console.log("Você acertou em " + tentativas + " tentativa(s).");
    } else {
        console.log("Você errou!");

        if (tentativa > numeroSecreto) {
            console.log("O número secreto é menor!");
        } else {
            console.log("O número secreto é maior!");
        }
    }
}