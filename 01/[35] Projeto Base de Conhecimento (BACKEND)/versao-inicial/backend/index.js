const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .into(app) //injeta app, vai adicionando os middlewares

app.listen(3000, () => {
    console.log('Backend is running...')
})