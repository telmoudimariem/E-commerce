const express = require('express');
const router = express.Router();
const userCont = require('../Controllers/userCont');

router.get('/', userCont.getAllUsers);
router.get('/Client', userCont.getClient);
router.get('/Artisan', userCont.getArtisan);


router.get('/:id', userCont.getUserById);

router.post('/', userCont.createUser);
router.put('/:id', userCont.updateUserById);
router.delete('/:id', userCont.deleteUserById);


module.exports = router;