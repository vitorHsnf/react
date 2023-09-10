/**
 * 10 - Escreva uma função em JavaScript que conte quantas vezes um caractere 
 *      aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.
 */

function contaLetras(text, letra){
    var cont = 0;
    text = text.toLowerCase();
    for (var pos = 0; pos < text.length; pos++){
        if (text.charAt(pos) == letra){
            cont++
        }
    }
    return cont;
}

const contaLetras2 = (text, letra) =>{
    var cont = 0;
    text = text.toLowerCase();
    for (var pos = 0; pos < text.length; pos++){
        if (text.charAt(pos) == letra){
            cont++;
        }
    }
    return cont;
}

