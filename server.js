const express = require('express');
const app = express();
const port = 3000;

// Rota principal que retorna uma mensagem de inicialização
app.get('/', (req, res) => {
  res.send("Servidor inicializado");
});

// Rota para consultar o CEP
app.get('/consulta-cep/:cep', async (req, res) => {
  const cep = req.params.cep;  // Captura o CEP da URL
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    // Fazendo a requisição à API do Viacep
    const response = await fetch(url);
    
    // Verificando se a resposta da API foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    
    // Convertendo a resposta para JSON
    const data = await response.json();
    
    // Verificando se a chave 'logradouro' está presente nos dados
    if (data.logradouro) {
      res.json({
        message: "Validação bem-sucedida!",
        data: data
      });
    } else {
      res.status(400).json({
        message: "Validação falhou: Campo 'logradouro' não encontrado.",
        data: data
      });
    }
  } catch (error) {
    // Caso ocorra algum erro na requisição
    res.status(500).json({
      message: 'Erro ao buscar os dados',
      error: error.message
    });
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
