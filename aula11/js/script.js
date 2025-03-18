// método alert: undefined não aponta para nenhum endereço de memória.
//alert('Com a nossa mensagem.')


//window.alert('Mensagem-Vs Code')

//Confirm: retorna true or false
//window.confirm('Deseja realmente apagar? Vs Code')

//window.prompt('Digite o seu nome: ')

// Salvar um numero no endereço de memória
//pelo console
//let num1 = prompt('Digite um número: ')

//let num2 = prompt('Digite outro número: ')


//let num3 = prompt('Digite outro número: ')

//tipo é string, logo é necessário fazer a cast ou a conversão
//num1 + num2

//typeof para verificar o tipo de dado
//typeof num1
//typeof num2

//métodos de conversão
//parseFloat
//parseInt
//Number
//num1 = parseFloat(num1);
//num2 = parseInt(num2);
//num3 = Number(num3);

//Somas após a conversão
//num1 + num2

let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

//para exibir no browser basta usar o console.log()
console.log(typeof num1, typeof num2);

num1 = parseInt(num1);
num2 = parseInt(num2);

console.log(typeof num1, typeof num2);

const resultado = num1 + num2;
parseInt(resultado)

//É um tipo de concatenação
//alert('O resultado de ' + num1 + ' + ' + num2 + ' é = ' + resultado)

//Outro tipo de concatenação
//${variavel ou direto ex: num1 + num2}
alert(`O resultado de: ${num1} + ${num2} = ${num1 + num2}`)