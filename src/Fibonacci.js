
var readline = require('readline');

const fibonacci = (n) => {
    let sequence = [0,1];

    for(let i=sequence.length; i<n; i++) {
        sequence[i] = sequence[i-2] + sequence[i-1];
    }
    return sequence.includes(n);
}

// Cria leitor para ler input do terminal
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


leitor.question("Digite um número para a avaliação: ", function(answer) {
    const n = Number(answer);
    console.log(`O número ${n} ${fibonacci(n)?'pertence': 'não pertence'} à sequência de Fibonacci.`);
    leitor.close();
});

  
  