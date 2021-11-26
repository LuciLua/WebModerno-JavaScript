// npm install node-sass gulp-sass --save-dev

const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

exports.default = series(transformacaoCSS)

// so da certo em outro arquivo....