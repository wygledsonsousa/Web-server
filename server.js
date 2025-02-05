const http = require('http');
const fs = require('fs');  // Para ler arquivos
const path = require('path');  // Para trabalhar com caminhos de arquivos

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Caminho para o arquivo HTML
    const filePath = path.join(__dirname, 'index.html');

    // Lê o arquivo HTML e envia como resposta
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro ao carregar a página');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/style.css') {
    // Servir o arquivo CSS
    const filePath = path.join(__dirname, 'style.css');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro ao carregar o CSS');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else {
    // Caso a URL não seja encontrada
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
