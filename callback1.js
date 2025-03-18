//const fabricantes = ["Mercedes", "Audi", "BMW"] /*Função callback: funções passadas como argumento para outras funções - ajax*/

//function imprimir(nome, indice){
    //console.log(`${indice + 1}. ${nome}`)
//}

//fabricantes.forEach(imprimir)

//fabricantes.forEach(fabricante => console.log(fabricante))

/*callback 2 - notas */

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback


const notasBaixas1 = []

for (let i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(`As notas menores que 7.0 são: [${notasBaixas1}]\n`)

//com callback
console.log('Com callback')

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(`${notasBaixas2}\n`)

//com arrow e callback
console.log('Com callback e arrow')
const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)