// recupero express

const express = require(`express`)

//definisco il router

const router = express.router();

//definisco le rotte

//index 
router.get(`/posts`, (req, res) => {
  res.send(`lista dei post`)
});
//show
router.get(`/post:id`, (req, res) => {
  res.send(`Visualizzo il post con id ${req.params.id}`)
});
//Create
router.post(`/posts`, (req, res) => {
  res.send(`Creazione di un nuovo post`)
});

//update
router.put(`/posts:id`, (req, res) => {
  res.send(`Modifica totale del post ${req.params.id}`)
});

//modifica Parziale
router.patch(`/posts:id`, (req, res) => {
  res.send(`Modifica Parziale del post ${req.params.id}`)
});

//Cancellazzione
router.delete(`/posts:id`, (req, res) => {
  res.send(`Cancellazzione del post con id ${req.params.id}`)
})


module.exports = router;