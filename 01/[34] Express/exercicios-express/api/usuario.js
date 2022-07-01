function salvar(req, res) {
    res.send('Usuario > Salvar')
}

function obter(req, res) {
    res.send('Usuario > Obter')
}

function deletar(req, res) {
    res.send('Usuario > Deletar')
}

// chave valor, se nao tem chave, o valor é a chave tbm
module.exports = { save: salvar, get: obter, delete: deletar }