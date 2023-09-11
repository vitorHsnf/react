// 27 -  Dado o seguinte vetor de objetos:

var usuarios = [{
    nome: "Douglas",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Elton",
    habilidades: ["PHP", "Ruby on Rails", "Laravel"]
}];

// Escreva uma função que retorne o seguinte resultado: 
// O Cleocimar possui as habilidades: Javascript, ReactJS, Redux 
// O Juranildo possui as habilidades: PHP, Ruby on Rails, Laravel

function dadosHabilidades(usuarios){
    let dados = "";
    for (let i = 0; i < usuarios.length; i++){
        dados += `O ${usuarios[i].nome} possui as habilidades: 
                    ${usuarios[i].habilidades.join(', ')} <br>`
    }
    return dados;
}

const dadosHabilidades2 = (usuarios) => {
    let dados = "";
    for (let i = 0; i < usuarios.length; i++){
        dados += `O ${usuarios[i].nome} possui as habilidades: 
                    ${usuarios[i].habilidades.join(', ')} <br>`
    }
    return dados;
}

output = document.getElementById("output");
output.innerHTML = dadosHabilidades2(usuarios);

