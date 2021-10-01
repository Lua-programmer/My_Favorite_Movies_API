const express = require('express');
const cors = require('cors');

const app = express();
port = 8000;

//middleware
app.use(express(JSON)); //AQUI O MÉTODO USO FALA PARA O EXPRESS TRABALHAR COM JSON
app.use(cors());

const FilmesRouter = require('./routers/filmes.routes');
app.use('/filmes', FilmesRouter); //Inicializando as rotas /filmes
 

app.get('/', (req, res) => {
    res.send('My Favorite Movies');
})


app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
})