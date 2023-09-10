/**
 * 14 - Criar uma função que receba como parâmetro um array de números e 
 *      retorne um array contendo somente números positivos.
 */

function arrayPositiva(arr){
    newArray = [];
    pos = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            newArray[pos] = arr[i];
            pos++;
        }
    }

    return newArray;
}

const arrayPositiva2 = (arr) => arr.filter((numero) => numero > 0);