module.exports = (app, texto_name, texto_price) => {

    function salvar(req, res) {
        res.send(`Produto > Salvar > 
        ${texto_name}: ${req.query.name}
        ${texto_price}: ${req.query.price}`)
    }
    function obter(req, res) {
        res.send(`Produto > Obter >
        ${texto_name}: ${req.query.name}
        ${texto_price}: ${req.query.price}`)
    }


    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { save: salvar, get: obter }
}