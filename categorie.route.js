const express = require ('express');
const router = express.Router();
const categorieCont = require('../Controllers/categorieCont');


router.get('/', categorieCont.getAllCategorie);
router.get('/:id', categorieCont.getCategorieById);

router.post('/', categorieCont.createCategorie);
router.delete('/:id', categorieCont.deleteCategorieById);
router.put('/:id', categorieCont.updateCategorieById);

module.exports = router;
