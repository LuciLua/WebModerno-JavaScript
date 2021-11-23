const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({ 
            comments: false, // para que comentarios nao sejam transferidos para o arquivo final
            presets: ["env"] // env é o preset mais moderno js

         }))
         .pipe(uglify()) // pega todo o codigo e converte ele para ser minificado

         // para tratar erros
         .on('error', err => console.log(err))

         .pipe(concat('codigo.min.js')) // pega todos os arquivos selecionados que já foram compilados usando babel de uma vesao mais atual para uma versao mais compativel, e concatena 
         // geralmente usa .min quando o codigo é minificado.. parametro: nome do arquivo a ser salvo

         .pipe(gulp.dest('build/js'))
}

function fim(cb){
    console.log('Fim!!')
    return cb()
}

// nem sempre é bom, pois nem sempre executa a que vc precisa primeiro
// module.exports.default = parallel(transformacaoJS, fim) 

module.exports.default = series(transformacaoJS, fim) 
