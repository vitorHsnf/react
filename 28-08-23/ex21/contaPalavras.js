// 21 - Contar a quantidade de palavras em um texto

function contaPalavras(text){
    const palavras = text.split(" ");
    return palavras.length;
}

const contaPalavras2 = (text) => (text.split(" ")).length;