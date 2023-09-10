/* 
    6 - Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. 
    Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578. 
*/

function inverteNumero(num){
    var invert = 0;
    while (num != 0) {
        invert *= 10;
        invert += num % 10;
        num = Math.trunc(num/10);
    }
    return invert;
}

const inverteNumero2 = (num) => {
    var invert = 0;
    while (num != 0) {
        invert *= 10;
        invert += num % 10;
        num = Math.trunc(num/10);
    }
    return invert;
};


