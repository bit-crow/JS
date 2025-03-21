const calcular = document.getElementById('calcular');

function imc () {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }else if (valorIMC < 25) {
            classificacao = 'peso ideal!';
        }else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificacao = 'Obesidade grau I';
        }else if (valorIMC < 40) {
            classificacao = 'Obesidade grau II.';
        }else {
            classificacao = 'Obesidade mórbida!'
        }

        resultado.textContent = `${nome} seu IMC eh de ${valorIMC} e a classificação eh ${classificacao}.`

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', imc);