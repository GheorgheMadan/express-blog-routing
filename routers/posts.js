// importo express anche nel file delle rotte
const express = require('express');
// importo la parte di routing
const router = express.Router();

// importo i dati posts
const posts = require('../data/posts.js')

// leggo tutti gli elementi
router.get('/', function (req, res){
    res.send(posts)
})

router.get('/:id', function (req, res){
    res.send( posts[req.params.id])
})

// store
router.post('/:id', function (req, res) {
    res.send('Creazione nuova pizza');
});
// update di un elemento 
router.put('/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});
// modifico un elemento 
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});
// elimino 
router.delete('/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});


module.exports = router 