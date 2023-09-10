/**
 * 9 - Escreva uma função que calcule e retorne o fatorial
 *     de um número inteiro fornecido pelo usuário.
*/

function fatorial(num){
    if (num < 0){
        return "Número Inválido";
    }
    if (num == 1 || num == 0){
        return 1; 
    }
    return num*fatorial(num-1);
}

const fatorial2 = (num) => {
    if (num == 1 || num == 0){
        return 1;
    }
    return num*fatorial(num-1);
}

