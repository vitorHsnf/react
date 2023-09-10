// 19 - Retornar a maior string de um array
function maiorString(arr){
    let maior = arr[0]; 

    for (let i = 1; i < arr.length; i++)
    {   
        // Compara pelo comprimento dos arrays
        if (arr[i].length > maior.length){
            maior = arr[i];
        
        // Compara pela ordem alfabética 
        } else if(arr[i].length == maior.length && arr[i] > maior){
            maior = arr[i];
        }
    }
    return maior;
}

const maiorString2 = (arr) => {
    let maior = arr[0]; 

    for (let i = 1; i < arr.length; i++)
    {   
        // Compara pelo comprimento dos arrays
        if (arr[i].length > maior.length){
            maior = arr[i];
        
        // Compara pela ordem alfabética 
        } else if(arr[i].length == maior.length && arr[i] > maior){
            maior = arr[i];
        }
    }
    return maior;
}