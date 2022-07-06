const bodyParser = require('body-parser')
const cors = require ('cors')



// app em index.js
module.exports  = app => {
    app.use(bodyParser.json())
    app.use(cors())
}

// Backend precisa do node (em desenvolvimento e em producao)
// Frontend não precisa do node (em produção), desesnvolvimento precisa sim

