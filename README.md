# Cep_Pipeline
Usando o arquivo .yml para testar as requisições com FETCH e AXIOS

#Modelos de Teste
## Modelo 1
- Testar API de CEP: 
  Faz uma requisição Curl direto para api de cep
## Modelo 2 
- Testar Get com Fetch: 
  executa o fetch.js com "run: node fetch.js" localmente sem iniciar o servidor, verificação e mostrando o resultado pelo javascript
## Modelo 3 
- Testar GET com Fetch no server: 
  Inicia um servidor configurado no arquivo server.js, e testa a porta 3000 passando na url o cep pelo curl, fazendo uma verficação e mostrando o resultado pelo yml com php
