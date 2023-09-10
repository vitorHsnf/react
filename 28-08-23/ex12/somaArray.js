// 12 - Calcular a soma dos números de um array

function somaArray(arr){
    var soma = 0;

    for (var i = 0; i < arr.length; i++){
        soma += arr[i];
    }

    return soma;
}

const somaArray2 = (arr) => {
    var soma = 0;
    
    for (var i = 0; i < arr.length; i++){
        soma += arr[i];
    }

    return soma;
}