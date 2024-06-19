const prompt = require('readline-sync');

const idade = prompt.question('Qual eh a sua idade?');

//coerção explícita
const idadeNumber = Number(idade);

console.log(idade, typeof idadeNumber);

console.log(Number("X")); // NAN - Not a Number

console.log(String(10), typeof String(10));

//coerção implícita
//se for soma, ele tenta retornar tudo em string, se não, ele transforma em número

console.log(1 + "1");
console.log(10 - "5");

// npm sync = biblioteca para ler os dados do usuário
//leitura de dados no browser = window.prompt