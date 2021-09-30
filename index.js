const express = require('express');

const app = express();
port = 8000;

const Filmes = [
    {
        nome: 'Capitã Marvel',
        nota: 10,
        urlImagem: '#',
        genero: 'Aventura',
        id: 1
    },
    {
        nome: 'Capitã Marvel',
        nota: 10,
        urlImagem: '#',
        genero: 'Aventura',
        id: 2
    },
    {
        nome: 'Capitã Marvel',
        nota: 10,
        urlImagem: '#',
        genero: 'Aventura',
        id: 3
    },
    {
        nome: 'Capitã Marvel',
        nota: 10,
        urlImagem: '#',
        genero: 'Aventura',
        id: 4
    },
    {
        nome: 'Capitã Marvel',
        nota: 10,
        urlImagem: '#',
        genero: 'Aventura',
        id: 5
    },
]   
app.get('/', (req, res) => {
    res.send('My Favorite Movies')
})





app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
})