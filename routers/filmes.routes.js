const express = require("express"); //IMPORTANDO BIBLIOTECA EXPRESS
const router = express.Router(); //RETORNANDO UM ROTADOR QUE NOS PERMITE CONFIGURAR TODAS AS ROTAS DA NOSSA APLICAÇÃO

//CONSTANTES PARA RESPOSTAS POSITIVAS DOS MÉTODOS
const atualizado =
  "Parabéns, você conseguiu atualizar o filme com sucesso, retorne a página principal para conferir a atualização!";
const excluido =
  "Você excluiu o filme, retorne a página principal para checar a exclusão";

const Filmes = [
  {
    nome: "Capitã Marvel",
    genero: "Aventura",
    nota: 10,
    imagem:
      "https://media.fstatic.com/QUAQAfm_5r5BplLBp5o3g0PyiZE=/290x478/smart/media/movies/covers/2019/01/DxDbcwbVAAA6xeu.jpg",
    id: Date.now(),
  },
  {
    nome: "Capitão América: O Primeiro Vingador",
    genero: "Ação",
    nota: 10,
    imagem:
      "https://i.pinimg.com/originals/6f/b5/9a/6fb59a34b163b3fa905a054f8cdc8ccc.jpg",
    id: Date.now(),
  },
  {
    nome: "Homem de Ferro II",
    genero: "Ação",
    nota: 10,
    imagem: "http://vortexcultural.com.br/images/2019/04/homem-de-ferro-2.jpg",
    id: Date.now(),
  },
];
//O MÉTODO Date.now() RETORNA O NÚMERO DE MILISEGUNDOS DECORRIDOS DESDE 1° DE JANEIRO DE 1970 00:00:00 UTC. DESSA FORMA UTILIZANDO ESSE MÉTODO NO ID DO PROJETO IREMOS TER SEMPRE UM 'ID' DIFERENTE.


//-----------------------------INICIO DO CRUD----------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//GET /filmes - RETORNANDO UMA LISTA DE FILMES
router.get("/", (req, res) => {

  res.send(Filmes);
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//GET - /filmes/id - RETORNANDO UM ÚNICO FILME POR ID
router.get("/:id", (req, res) => {
  //FAZENDO UMA REQUISIÇÃO DE UM ÚNICO FILME POR ID
  const idP = req.params.id;
  //O MÉTODO FINDINDEX EXECUTA A FUNÇÃO CALLBACK UMA VEZ PARA CADA ELEMENTO PRESENTE NO ARRAY ATÉ ENCONTRAR UM ONDE O CALLBACK RETORNA UM VALOR VERDADEIRO. SE TAL ELEMENTO FOR ENCONTRADO, FINDINDEX RETORNA IMEDIATAMENTE O INDICE DESTE ELEMENTO
  const index = Filmes.findIndex((filme) => filme.id == idP);
  const filme = Filmes[index];

  //RESPOSTA A REQUISIÇÃO
  res.send(filme);
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//POST - /filmes/add  - CADASTRAR UM NOVO FILME
router.post("/add", (req, res) => {
  const filme = req.body;
  filme.id = Date.now();

  Filmes.push(filme);

  //RETORNANDO UMA MENSAGEM COM O FILME ADICIONADO
  console.log(201);
  res.status(201).send(filme);
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//PUT - /filmes/id  - ATUALIZANDO FILME POR ID
router.put("/:id", (req, res) => {
  const novoFilme = req.body;
  const id = req.params.id;
  let filmeExistente = Filmes.find((filme) => filme.id == id);

  filmeExistente.nome = novoFilme.nome;
  filmeExistente.genero = novoFilme.genero;
  filmeExistente.nota = novoFilme.nota;
  filmeExistente.imagem = novoFilme.imagem;

  
  res.send(atualizado);
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
//DELETE  - /filmes/id  - EXCLUINDO FILME POR ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = Filmes.findIndex((filme) => filme.id == id);
  Filmes.splice(index, 1);

  res.send(excluido);
});

module.exports = router; // EXPORTANDO O MÓDULO QUE RETORNA O OBJETO ROUTER
