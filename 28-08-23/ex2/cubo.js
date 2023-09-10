// 2 - Escreva uma função que retorne o cubo de um número fornecido pelo usuário

function aoCubo(num) {
    return num**3;
}

const aoCubo2 = (num) => num**3;

function ex2(){
    var num = document.getElementById("num").value;
    var res = document.getElementById("res");
    var cubo = aoCubo2(num);

    res.innerHTML = `${num} elevado ao cubo é ${cubo}`;
}