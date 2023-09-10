// 13 - Calcular a média de todos os números de um array

function mediaArray(arr){
    var res = 0;

    for (var i = 0; i < arr.length; i++){
        res += arr[i];
    }

    return res/arr.length;
}

const mediaArray2 = (arr) => {
    let res = 0;

    for (var i = 0; i < arr.length; i++){
        res += arr[i];
    }

    return res/arr.length;
}