/**
 * 11 - Escreva uma função que verifica se um número fornecido 
 *      pelo usuário em um prompt é primo ou não.
 */

function ehPrimo(n){
    var primo = 1;
    if (n == 1 || n < 1){
        primo = 0;
    }
    else{
        for (i = 2; i < n; i++){
            if (n % i == 0){
                primo = 0;
                break;
            }
        }
    }
    

    return primo;
}