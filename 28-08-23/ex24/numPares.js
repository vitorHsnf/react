// 24 - Crie uma função que dado um intervalo (entre x e y) exiba todos número pares

function pares(x, y)
{       
    let pares = [];
    let output = document.getElementById("output");

    for (var num = x; num <= y; num++){
        if (num % 2 == 0){
            pares.push(num);
        }
    }

    output.innerHTML = `Pares entre ${x} e ${y}: <br> ${pares.join(', ')}`;
}


const pares2 = (x, y) => {
    let pares = [];
    let output = document.getElementById("output");

    for (var num = x; num <= y; num++){
        if (num % 2 == 0){
            pares.push(num);
        }
    }

    output.innerHTML = `Pares entre ${x} e ${y}: <br> ${pares.join(', ')}`;
}

pares2(32, 321);