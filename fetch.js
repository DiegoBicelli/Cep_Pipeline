async function consultaCepfetch(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json(); 
        console.log(data); 
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    }
//
const cep = '03068010'
consultaCepfetch(cep)

  