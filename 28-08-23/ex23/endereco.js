/**
 * 23 - Crie uma função com o objeto abaixo que retorne o seguinte conteúdo: 
 *      O usuário mora em Cuiabá / MT, no bairro Jardim cuiabá, na Av do CPA, nº 1293.
 */

function dadosEndereco(endereco){

    return `O usuário mora em ${endereco.cidade}/${endereco.uf},
            no bairro ${endereco.bairro}, na ${endereco.rua}, nº ${endereco.numero}`;
}

const dadosEndereco2 = (endereco) => `O usuário mora em ${endereco.cidade}/${endereco.uf}, 
                                        no bairro ${endereco.bairro}, na ${endereco.rua}, nº ${endereco.numero}`;


var endereco = {
    rua: "Av do CPA",
    numero: 1293,
    bairro: "Jardim Cuiabá",
    cidade: "Cuiabá",
    uf: "MT"
};

const output = document.getElementById("output");
output.innerHTML = dadosEndereco2(endereco);