var express = require('express');
var router = express.Router();
var controller = require('../controllers/locais');



/* GET home page. */

router.get('/locais', controller.listarLocais);
router.post('/locais', controller.criarLocal);


module.exports = router;
