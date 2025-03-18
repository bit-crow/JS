const nome = 'Leonardo';
const sobrenome = 'Honorato';
const idade = 30;
const peso = 88;
const altura = 1.90;
const anoAtual = 2024;
let imc;
let anoNascimento;

anoNascimento = anoAtual - idade;
imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade pesa: ${peso}KG tem ${altura} de altura seu IMC é: ${imc}`);