/*
    7. Escreva uma função que permita contar o número de vogais contidas em 
    uma string fornecida pelo usuário. 
    Por exemplo, o usuário informa a string “Beterraba”, e a função retorna 
    o número 4 (há 4 vogais nessa palavra).
*/

function contaVogais(palavra){
    
    var cont = 0;
    var palavra = palavra.toLowerCase();

    for (var pos = 0; pos < palavra.length; pos++){
        if (palavra.charAt(pos) == 'a' || 
            palavra.charAt(pos) == 'e' ||
            palavra.charAt(pos) == 'i' ||
            palavra.charAt(pos) == 'o' ||
            palavra.charAt(pos) == 'u'){

                cont++; 
        }
    }

    return cont;

}

const contaVogais2 = (palavra) => {
    var palavra = palavra.toLowerCase();
    var cont = 0;
    for (var pos = 0; pos < palavra.length; pos++){
        if (palavra.charAt(pos) == 'a' || 
            palavra.charAt(pos) == 'e' ||
            palavra.charAt(pos) == 'i' ||
            palavra.charAt(pos) == 'o' ||
            palavra.charAt(pos) == 'u'){

                cont++;
            }
    }

    return cont;
}