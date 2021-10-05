const express = require('express'),
router = express.Router(), 
controllerLoja = require('../controller/loja')

/* GET users listing. */
router.get('/', controllerLoja.index);

module.exports = router;
