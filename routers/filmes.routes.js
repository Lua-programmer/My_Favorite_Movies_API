const express = require('express'); //IMPORTANDO BIBLIOTECA EXPRESS
const router = express.Router(); //RETORNANDO UM ROTADOR QUE NOS PERMITE CONFIGURAR TODAS AS ROTAS DA NOSSA APLICAÇÃO

const Filmes = [
    {
        nome: 'Capitã Marvel',
        genero: 'Aventura',
        nota: 10,
        urlImagem: 'https://media.fstatic.com/QUAQAfm_5r5BplLBp5o3g0PyiZE=/290x478/smart/media/movies/covers/2019/01/DxDbcwbVAAA6xeu.jpg',
        id: Date.now(),
    },
] 
//O MÉTODO Date.now() RETORNA O NÚMERO DE MILISEGUNDOS DECORRIDOS DESDE 1° DE JANEIRO DE 1970 00:00:00 UTC. DESSA FORMA UTILIZANDO ESSE MÉTODO NO ID DO PROJETO IREMOS TER SEMPRE UM 'ID' DIFERENTE.

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//GET /filmes - RETORNANDO UMA LISTA DE FILMES
router.get('/', (req, res) => {
    res.send(Filmes);
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//GET - /filmes/id - RETORNANDO UM ÚNICO FILME POR ID
router.get('/:id', (req, res) => {
    //FAZENDO UMA REQUISIÇÃO DE UM ÚNICO FILME POR ID
    const idP = req.params.id;
    //O MÉTODO FINDINDEX EXECUTA A FUNÇÃO CALLBACK UMA VEZ PARA CADA ELEMENTO PRESENTE NO ARRAY ATÉ ENCONTRAR UM ONDE O CALLBACK RETORNA UM VALOR VERDADEIRO. SE TAL ELEMENTO FOR ENCONTRADO, FINDINDEX RETORNA IMEDIATAMENTE O INDICE DESTE ELEMENTO
    const index = Filmes.findIndex(filme => filme.id == idP);
    const filme = Filmes[index];

    //VALIDAÇÃO
    if (!filme) {

       console.log(404);
       res.status(404).send("Sorry can't find that!")
       return;
    }

    //RESPOSTA A REQUISIÇÃO
    res.send(filme)
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//POST - /add  - CADASTRAR UM NOVO FILME
router.post('/add', (req, res) => {
    const filme = req.body;
    filme.id = Date.now();
    
    //VALIDAÇÃO
    if(!filme || filme.nome || filme.genero || filme.nota || filme.urlImagem) {
        console.log(400);
        res.status(400).send("Bad request");
    }else {
        Filmes.push(filme);
    }
    
    res.send(filme);
})






module.exports = router; // EXPORTANDO O MÓDULO QUE RETORNA O OBJETO ROUTER