const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')


function monitorarArquivos(cb){

    return gulp.src('build')
    .pipe(webserver({ 
        port: 8080,
        open: true,
        livereload: true
     }))
}

function servidor(cb){

    // monitorar: quando mudar... atualize
    // sempre que alterar o html vou chamr essa funcao appHTML
    watch('src/**/*.html', () => gulp.series('appHTML')()) // monitoranmento com watch
    watch('src/**/*.scss', () => gulp.series('appCSS')()) // monitoranmento com watch
    watch('src/**/*.js', () => gulp.series('appJS')()) // monitoranmento com watch
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')()) // monitoranmento com watch
    return cb() 
}


module.exports = {
    monitorarArquivos,
    servidor
}