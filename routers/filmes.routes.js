const express = require('express');
const router = express.Router(); //

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

router.get('/', (req, res) => {
    res.send(Filmes);
})

router.post('/add', (req, res) => {
    res.send(req.body);
})


module.exports = router; // Exportando o router