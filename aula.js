let numero1 = 10;
let numero2 = 10;

let variavelnumerointeiro = 1;
let variavelnumeroreal = 1.5;
let variavelbooleana = true; //ou false
let variaveltexto = "oi"; 

//array == matriz

const array = ["pedro", "joao", "maria", "felipe", "eduarda"];
console.log(matriz[0,3]);
//VARIAVEL -> CONDICIONAL -> COMPARAÇÃO -> RESULTADO (VERDADEIRO OU FALSO)
//PROGRAMAÇÃO ESTRUTURADA (PE)
//PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)

//SE,SENAO, SE SENAO, SÃO PROPOSIÇÕES 
if (numero1 == numero2) { //SE numero1 é igual a numero2
    console.log("numero1 é igual numero2");
}

else { //SENÃO
    console.log("numero1 não é igual numero2");
}
while (true) { //enquanto condição estiver verdadeira
    console.log("loop infinito até que o codigo seja desligado.");
}

while (numero1 > numero2) { //enquanto numero1 for maior que numero2
    console.log("enquanto numero1 é maior que numero2 o loop ele irá rodar até que o resto seja falso, assim que a condição for falsa o loop para.");
    // diminui 1 unidade de numero1
}
for (inicialização; condição; incremento) {  //loop finito com contagem de rotações.
    console.log("loop infinito até que o codigo seja desligado.");
}

for (let contador = 0; contador < 10; contador++) { //enquanto contador for menor que 10 ele irá rodar até que o resto seja falso, assim que a condição for falsa o loop para.
    console.log(contador); //mostra o valor de contador
}

function somar(numero1, numero2) { //retorna a soma de dois numeros.
    return numero1 + numero2;
}
somar();


// 10
// 10+10=20 "30"
// = ATRIBUIÇÃO (EXEMPLO: numero1 = 10)
// == IGUALDADE AMPLA (SERVE PRA COMPARAR DOIS VALORES DIFERENTES, POR EXEMPLO "10" E 10)
// === IGUALDADE ESTREITA (SERVE PRA COMPARAR DOIS VALORES DIFERENTES, POR EXEMPLO "10" E 10)


// CONDICIONAIS IF, ELSE ETC, E LOOPS
// FUNÇÕES CONSOLE, VARIAVEIS ETC 