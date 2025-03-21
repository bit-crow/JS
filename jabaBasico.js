var x; 
x = 0;

console.log(x);

x = 1;
console.log(x);

x = 0.01;
console.log(x);

x = "hello world"
console.log(x);

x = 'JavaScript';
console.log(x);

x = true;
console.log(x);

x = false;
console.log(x);

x = null;
console.log(x);

x = undefined;
console.log(x);

//Objeto é uma coleção de pares chave: valor
var book = {
    topic: "JavaScript",
    fat: true
}//criação de um objeto, chamado book, onde eu tenho uma coleção par, chave: valor

//acessar as propriedades de um objeto
console.log(book.topic)//acesasndo o tópico do livro com .
console.log(book["fat"])//acessando o fat com array? e chamando passando a chave fat
book.author = "Flanagan";//declarando no objeto uma nova chave com o nome author e atribuindo a ele o nome flanagan
console.log(book)//imprimindo na tela
console.log(book["author"])//acessando a chave author e imprimindo o valor na tela

//array: (listas indexadas numéricamente) de valores.
var primes = [2, 3, 5, 7];
console.log(primes[0])
console.log(primes.length);
console.log(primes.length-1)
console.log(primes[4] = 9);
console.log(primes);
console.log(primes[4] = 11);
console.log(primes);
var empty = [];
console.log(empty);

//array com 2 elementos, cada elemento é um objeto
var points = [
    {x:0, y:0},
    {x1:0, y1:0}
]

console.log(points)
console.log(points[0])
console.log(points[1])
points.push({x3:0, y3:0})
points.push(3)
console.log(points)

var data = {
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]]
}

console.log(data)
console.log(data.trial1)
console.log(data.trial1[0])
console.log(data.trial2[1])
console.log(data['trial1'])
//como fazer um push?
