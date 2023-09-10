// 16 - Calcular a soma de todos os dígitos de um número inteiro positivo

function somaDigitos(numDigitos){
    let soma = 0;

    for (let i = 0; i < numDigitos.length; i++){
        soma += parseInt(numDigitos[i], 10);
    }

    return soma;
}

const somaDigitos2 = (numDigitos) => {
    let soma = 0;

    for (let i = 0; i < numDigitos.length; i++){
        soma += parseInt(numDigitos[i], 10);
    }

    return soma;
}