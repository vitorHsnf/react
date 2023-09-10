/**
 * 18 - Criar uma função que retorno um valor booleano 
 *      informando se o número enviado como parâmetro é um número primo.
 */

function ehPrimo(num){
    if (num == 1 || num < 1){
        return false;
    }
    else{
        for (i = 2; i < num; i++){
            if (num % i == 0){
                return false;
            }
        }
    }

    return true;
}