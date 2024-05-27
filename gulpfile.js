const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require ('gulp-obfuscate');
const imagemin = require ('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
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


exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(comprimeImagens));
}

