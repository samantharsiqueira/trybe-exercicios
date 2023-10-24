let lado1 = 55;
let lado2 = 75;
let lado3 = 60;
let sum = (lado1+lado2+lado3);

let positivos = lado1 > 0 && lado2 > 0 && lado3 > 0;

if (sum === 180) {
  console.log("Os valores dos três ângulos internos de um triângulo.");
 } else if (sum !== 180) { 
  console.log ("Nao eh um tringulo");
 } else {
  console.log ("Erro: Invalido!");
 }

 /* Aqui eu poderia ter colocado mais uma condicao de INVALIDO e tambem checar se eram positivos. */
 