
# Desafio Target Sistemas - Estágio

1) Observe o trecho de código abaixo:

```
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
```


Ao final do processamento, qual será o valor da variável SOMA?
Resposta: 91 [clique aqui para acessar o código que responde a questão](./src/Soma.js)

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

Resposta: [clique aqui para acessar o código que responde a questão](./src/Fibonacci.js)


3) Descubra a lógica e complete o próximo elemento:

    a) 1, 3, 5, 7, ___ 
    Resposta: 9

    b) 2, 4, 8, 16, 32, 64, ____ 
    Resposta: 128

    c) 0, 1, 4, 9, 16, 25, 36, ____ 
    Resposta: 49

    d) 4, 16, 36, 64, ____ 
    Resposta: 100

    e) 1, 1, 2, 3, 5, 8, ____ 
    Resposta: 13

    f) 2,10, 12, 16, 17, 18, 19, ____ 
    Resposta: 200

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 
Resposta: A solução seria ligar um dos interruptores de luz e esperar por cinco minutos. Em seguida, desligar novamente, e ligar outro. Enquanto o segundo interruptor de luz que foi ligado estiver ligado, se entra em uma das salas para ver se a lâmpada está acesa. verificando se a luz esta acesa ou apagada podemos tirar algumas conclusões: se a lâmpada estiver acesa, então o segundo interruptor de luz que foi ligado está correto.
Caso a lampâda nao estiver acesa, mas, ainda estiver quente, então o primeiro interruptor de luz ligado acende a lâmpada da sala visitada.
Tendo certeza de que um interruptor acende a luz de uma das salas, basta apenas deixar um dos interruptores que ainda restam ser avaliados ligado e o outro desligado e depois vou a outra que ainda não visitei e descubro se ela corresponde ao interruptor que eu liguei. Com isso é possivel descobrir quais os interruptores correspondem a cada uma das luzes das salas


5) Escreva um programa que inverta os caracteres de um string.
Resposta: [clique aqui para acessar o código que responde a questão](./src/InverterString.js)

