const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')


function appHTML(){

    return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}

function appCSS(cb){

    return gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('Error', sass.logError))
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

function appJS(){

    return gulp.src('src/assets/js/**/*.js') // arquivos na pasta js e subpastas 
    .pipe(babel({ presets: ['ENV'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'))
}
function appIMG(cb){

    return gulp.src('src/assets/imgs/**/*.*') // para qualwuer imagem png, jpg....
    .pipe(gulp.dest('build/assets/imgs'))
}

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}