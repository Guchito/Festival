const {src, dest, watch, parallel} =require('gulp')

//CSS
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano');
const postcss = require('gulp-postcss')
const sourcemaps =require('gulp-sourcemaps')

// IMG

const cache = require('gulp-cache')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp');

// JS
const terser = require('gulp-terser-js')


function css(done){
    
    src('src/scss/**/*.scss') //Identificar el archivo SCSS a compilar
        .pipe(sourcemaps.init())
        .pipe( plumber() )
        .pipe(sass()) //Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css')) //Almacenarlo
    done()
}

function images(donde){
    const options = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{jpg, png}')
        .pipe(cache(imagemin(options)))
        .pipe(dest('build/img'))
    donde()
}


function versionWebp(done){
    const options = {
        quality: 50
    }
    src('src/img/**/*.{jpg, png}')
        .pipe(webp(options))
        .pipe(dest('build/img'))
    done()
}
function javascript(done){
    src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'))
    done()
}

function dev(done){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', javascript)
    done()
}


exports.css = css;
exports.javascript = javascript;
exports.images = images;
exports.versionWebp = versionWebp;
exports.dev = parallel(images, versionWebp, javascript, dev)