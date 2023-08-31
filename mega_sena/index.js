
var resultado = [];

function sortear(){
    if(resultado.length == 6){
        document.getElementById("finalizacao").innerHTML = `Sorteio finalizado!`;
        document.getElementById('button').setAttribute('disabled', 'disabled');
        return;
    }
    
    var num = Math.floor(Math.random() * 60) + 1;
    var found = resultado.find((element) => element == num);
    if (found == null){
        resultado.push(num);
        document.getElementById("numSorteado").innerHTML = `Último número sorteado: ${num}`;
        document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
        
    } else {
        console.log(`Número ${num} repetido, sorteando novamente...`);
        sortear();
    }
}