async function consultaCepfetch(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      const data = await response.json();
  
      if (data.logradouro) {
        console.log("Validação bem-sucedida!");
        console.log(data)
        process.exit(0); 
      } else {
        console.error("Validação falhou: Campo 'logradouro' não encontrado.");
        process.exit(1); 
      }
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      process.exit(1); // Código 1 para falha
    }
  }
  
  consultaCepfetch('03068010');
  