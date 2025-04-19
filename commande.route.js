const express = require('express');
const router = express.Router();
const commandeCont = require('../Controllers/commandeCont');

// prendre toutes les commande 
router.get('/', commandeCont.getAllCommandes);

router.get('/user/:id', commandeCont.getAllCommandesForUser);
router.get('/client/:id', commandeCont.getAllCommandesForClient);
router.get('/artisant/:id', commandeCont.getAllCommandesForArtisan);

// route de prendre des commande par id
router.get('/:id', commandeCont.getAllCommandesById);

//route de creation d'une commande
router.post('/:id', commandeCont.createCommandeForUser);

//route de modification d'une commande
router.put('/:id', commandeCont.updateCommandeById);

//route de suppression d'une commande
router.delete('/:id', commandeCont.deleteCommandeById)

module.exports = router;