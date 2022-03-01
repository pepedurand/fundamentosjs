const texto1 = "Olá, mundo!";
const texto2 = "Olá, mundo!";
const senha = "senhaSuperSegura123!";
const stringDeNumeros = "1234";
const citacao = 'O Leo disse "oi"';

console.log(citacao);

console.log (typeof (stringDeNumeros));

console.log (senha);

//template string ou template literal

//concatenação (+)

const idade = 24;
const nome = "Pedro";

console.log ("O "+ nome + " tem " + idade + " anos.");

//exemplos

//to lower case

const cidade = "rio de janeiro";
const input = "Rio de Janeiro";

const inputMinusculo = input.toLocaleLowerCase ();

console.log (cidade===inputMinusculo);

//contagem de caracteres

const segundaSenha = "pedro1212";

console.log (segundaSenha.length);

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
