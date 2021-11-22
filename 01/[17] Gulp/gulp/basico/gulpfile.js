const gulp = require('gulp')
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

// para fazer tasks em serie, uma depois da outra
const { series, parallel } = require('gulp') 
// const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!\n')
    return cb()
}

function copiar(cb){
    // para selecionar quais arquivos vou selecionar como insumo/entrada para o workflow que sera definido dentrod este arquivo
    gulp.src(['pastaA/**/*.txt'])
    // .pipe(uglify())
    .pipe(dest('pastaB'))
    // console.log(gulp.src('pastaA/arquivo1.txt'))
    
    // aplicar trasnformações nos arquivos de entrada definidos... 
    // .pipe(imagemPelaMetade()) 
        // .pipe(filtroPretoEmBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // ...
    return cb()
}

const fim = cb => {
    console.log('Tarefa: fim')
    return cb()
}

// gulp espera receber  uma tarefa dafault
module.exports.default = series(
    parallel(antes1, antes2), // em paralelo
    copiar,
    fim
)