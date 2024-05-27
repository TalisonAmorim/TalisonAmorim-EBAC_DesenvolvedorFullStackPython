const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss') // Define o arquivo de entrada
        .pipe(sourcemaps.init()) // Inicializa a criação de sourcemaps
        .pipe(sass({
            outputStyle: 'compressed' // Configura o Sass para comprimir o CSS de saída
        }))
        .pipe(sourcemaps.write('./maps')) // Escreve os sourcemaps no diretório especificado
        .pipe(gulp.dest('./build/styles')); // Define o diretório de saída dos arquivos CSS compilados
}

function funcaoPadrao(callback){
    setTimeout(function(){
        console.log("Executando via Gulp");
        callback();

    },2000);
}

function dizOi(callback) {
    console.log("olá Gulp");
    dizTchau();
    callback();
}

function dizTchau(){
    console.log("Tchau Gulp");
}

// exports.default = gulp.series(funcaoPadrao,dizOi);
exports.default = gulp.parallel(funcaoPadrao,dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass
exports.watch = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass));
}

exports.javascript = comprimeJavaScript;