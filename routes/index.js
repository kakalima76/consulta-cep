var express = require('express');
var router = express.Router();
var controller = require('../controllers/locais');



/* GET home page. */

router.get('/locais', controller.listarLocais);
router.post('/locais', controller.criarLocal);
router.post('/listar', controller.listarProximos);
router.post('/dados', controller.atualizar);


module.exports = router;
