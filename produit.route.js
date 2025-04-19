const express = require('express');
const router = express.Router();
const produitCont = require('../Controllers/produitCont');

router.get('/', produitCont.getAllProduit);
router.get('/:id', produitCont.getProduitById);

router.post('/', produitCont.createProduit);
router.put('/:id', produitCont.updateProduitById);
router.delete('/:id', produitCont.delateProduitById);

module.exports = router;