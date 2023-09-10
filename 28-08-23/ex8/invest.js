/**
 * Escreva uma função que informe o retorno de um investimento (montante) com base nos 
 * valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
 * 
 * Use a fórmula: M = C * (1+i)t Onde: 
 *     C = Capital inicial investido
 *     i = Taxa de juros, em percentual
 *     t = Tempo do investimento, em meses
 * 
 * Exiba o resultado com duas casas decimais.
 */

function investe(c, i, t){
    var montante = c * (1 + (i/100)) ** t;
    return montante;
    
}

const investe2 = (c, i, t) => c*(1 + (i/100))**t;