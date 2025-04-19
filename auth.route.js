const expresse = require ('express');
const router = expresse.Router();
const authController = require('../Controllers/authcont');



router.post('/register', authController.registre);

router.post('/login', authController.Login);

module.exports = router;

