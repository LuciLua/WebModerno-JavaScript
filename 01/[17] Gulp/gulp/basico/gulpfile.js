const gulp = require('gulp')

// para fazer tasks em serie, uma depois da outra
// const { series } = require('gulp') 
const series = gulp.series

function copiar(callback){
    
    console.log('Tarefa de copiar')
   
    return callback()
}

// gulp espera receber  uma tarefa dafault
module.exports.default = series(copiar)