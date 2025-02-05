// Importa o módulo http do Node.js
const http = require('http');

// Define a porta em que o servidor irá escutar
const port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Responde com uma mensagem simples
  res.end('Olá, este é o seu servidor simples em JavaScript!');
});

// Faz o servidor escutar na porta 3000
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});