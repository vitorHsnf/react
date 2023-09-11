/**
 * 25. Escreva uma função que verifique se o vetor de habilidades passado possui a
 *     habilidade “Javascript” e retorna um booleano true/false caso exista ou não.
 */


function temHabilidade(skills){
    for (var i = 0; i < skills.length; i++)
    {
        if (skills[i] == 'JavaScript'){
            return true;
        }
    }
    return false;
}

const temHabilidade2 = (skills) => {
    for (var i = 0; i < skills.length; i++)
    {
        if (skills[i] == 'JavaScript'){
            return true;
        }
    }
    return false;
};

var skills = ["JavaScript", "ReactJS", "React Native", "Angular"];
const output = document.getElementById("output");
output.innerHTML = temHabilidade2(skills);