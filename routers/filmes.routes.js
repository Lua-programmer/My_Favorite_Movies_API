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
    const filme = req.body;
    filme.id = Filmes.length + 1;
    Filmes.push(filme);
    res.send({
        message: "Filme cadastrado com sucesso!!!",
    })
})

router.get('/:id', (req, res) =>{
    const id = req.params.id;
    Filmes.findIndex((filme) => {
        return filme.id == idParames
    })
})

module.exports = router; // Exportando o router