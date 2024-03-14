var readline = require('readline');

function reverseStr(str){
    let invertStr = ''
    for (let index = str.length - 1; index >= 0; index--) {
        invertStr += str[index];    
    }
    return invertStr;
}

// Cria leitor para ler input do terminal
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


leitor.question("Digite a string a ser revertida: ", function(answer) {
    const str = String(answer);
    console.log(reverseStr(str));
    leitor.close();
});

  