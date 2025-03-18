// Factory simples: função que retorna um objeto.
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 3000))
console.log(criarProduto('Televisão', 2500))
console.log(criarProduto('Geladeira', 6000))