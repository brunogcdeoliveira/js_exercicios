// Enunciado: Um caixa eletrônico tem disponível apenas notas de 5, 20 e 50 reais. Crie um algoritmo que recebe como entrada o valor que se deseja sacar e retorne a menor quantidade de notas que compõem esse valor. Ex1: para um saque de R$ 25, o algoritmo retornaria que são 2 notas, uma de 5 e uma de 20. Ex2: para um saque de R$ 175, o algoritmo retornaria que são 5 notas, três de 50, uma de 20 e uma de 5.

function contaCedulas() {
    var valorSaque = prompt("Digite o valor a ser sacado: ");
    var valorSaida50 = Math.floor(valorSaque/50);
    var sobra = valorSaque%50;
        
    var valorSaida20 = Math.floor(sobra/20);
    sobra = sobra%20;
        
    var valorSaida5 = Math.floor(sobra/5);
        
    console.log(`Valor a ser sacado: ${valorSaque}`);
    console.log(`Notas de 50: ${valorSaida50}`);
    console.log(`Notas de 20: ${valorSaida20}`);
    console.log(`Notas de 5: ${valorSaida5}`);
}

