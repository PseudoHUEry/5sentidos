const banco = require('../bd/bd'),
controllerLoja =
{
    index: (req, res) => {
        res.render('lojinha', {
            banco: banco
        })

    }
}
module.exports = controllerLoja