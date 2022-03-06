# fundamentosjs
Repositório com o básico da utilização de JS

Tipos de erros:
RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

console.error() para exibir mensagens de erro;
console.table() para visualizar de forma mais organizada informações tabulares;
console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

== -> valor

=== -> valor e tipo 

Operador ternário -> como se fosse um if

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203

Os parâmetros e o retorno das funções são utilizados de acordo com cada caso específico. Isso significa que nem sempre todas as funções que escrevemos vão precisar de um ou de outro para fazer o que precisam. Abaixo temos mais exemplos para entender melhor algumas situações.

Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.

function cumprimentar(){
 console.log('oi gente!')
}

cumprimentar()COPIAR CÓDIGO
Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string.

function cumprimentaPessoa(pessoa){
 console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')COPIAR CÓDIGO
Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.

No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.

function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”COPIAR CÓDIGO
A função cumprimentaPessoa(nomePessoa) recebe como parâmetro uma string onde podemos passar qualquer nome no momento em que executamos (ou chamamos) a função. Quando isso acontecer, a função cumprimentar() será executada também, e seu valor de retorno - a string Oi gente! - vai ocupar o lugar do ${} onde a função está sendo chamada.

Função com return e mais de um parâmetro: Lembrando que as funções podem receber a quantidade de parâmetros necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 se refere a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber - no caso, números.

function operacaoMatematica(numero1, numero2, numero3) {
 return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90COPIAR CÓDIGO
Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

Ainda há muito o que estudar no tema de funções, então pratique bastante pois parâmetros e retorno são conceitos essenciais.
