const axios = require("axios")

function consultaCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    axios.get(url).then(response => {
        const endereco = response.data;
        if(endereco.erro){
            console.error("CEP NÂO ENCONTRADO")
        }else{
            console.log('Dados do CEP:',endereco);
        }
    }).catch(error => {
        console.error('Erro ao fazer requisição:',error.message);
    }) 
}

const cep = '03068010';
consultaCep(cep)

