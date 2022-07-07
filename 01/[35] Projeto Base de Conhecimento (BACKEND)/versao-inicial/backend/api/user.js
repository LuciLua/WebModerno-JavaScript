module.exports = (app) => {
    // Criando metodos
    const save = (req, res) => {
        res.send('user > save')
    }

    return { save }
}