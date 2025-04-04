const express = require('express');
const path = require('path');

const app = express();

// Servindo arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal (home)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para adoção
app.get('/adocao', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'adocao.html'));
});

// Rota para doações
app.get('/doacoes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'doacoes.html'));
});

// Rota para associados
app.get('/associados', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'associados.html'));
});

// Rota para a página "Sobre nós"
app.get('/quatro-patas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quatro-patas.html'));
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
