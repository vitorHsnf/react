// 5 - Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

function areaPerimetroCirculo(r){
    var area = 2 * Math.PI * r;
    var perimetro = Math.PI * r * r;
    return `Área: ${area.toFixed(2)} cm <br> 
            Perímetro: ${perimetro.toFixed(2)} cm`;
}

const areaPerimetroCirculo2 = (r) => `Área: ${(2*Math.PI*r).toFixed(2)} cm <br>
                                      Perímetro: ${(Math.PI*r*r).toFixed(2)} cm`
