// 26 - Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos){
    if (anos <= 1){
        return `Junior`;
    } else if (1 < anos && anos <= 3){
        return `Pleno`;
    } else if (3 < anos && anos <= 6){
        return `Senior`;
    } else if (anos >= 7){
        return `Grão Mestre Jedi`;
    }
}

const experiencia2 = (anos) => {
    if (anos <= 1){
        return `Junior`;
    } else if (1 < anos && anos <= 3){
        return `Pleno`;
    } else if (3 < anos && anos <= 6){
        return `Senior`;
    } else if (anos >= 7){
        return `Grão Mestre Jedi`;
    }
};

var anosEstudo = 9;

output = document.getElementById("output");
output.innerHTML = `Com ${anosEstudo} anos de estudo,
                    o usuário é "${experiencia2(anosEstudo)}".`