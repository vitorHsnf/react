// 15 - Localizar o maior valor dentro de um array de números

function maiorValor(arr){
    let maior = arr[0];

    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] > maior)
            maior = arr[i];
    }
    return maior;
}

const maiorValor2 = (arr) => {
    let maior = arr[0];

    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] > maior)
            maior = arr[i];
    }
    return maior;
}