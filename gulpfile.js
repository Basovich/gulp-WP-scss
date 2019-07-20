const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');


sass.compiler = require('node-sass');


function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))   
    .pipe(autoprefixer({
      browsers: ['> 0.1%'],
      cascade: false
    }))
    .pipe(rename({
      suffix: '.min',
      prefix: ''
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'));
}

function watch() {
  gulp.watch('./src/scss/**/*.scss', style);
}

function cleaner() {
  return del(['build/*']);
}


gulp.task('sass', style);
gulp.task('watch', watch);
gulp.task('clean', cleaner);


gulp.task('build', gulp.series(cleaner,
                   gulp.parallel(style)
));

gulp.task('dev', gulp.series('build', 'watch'));
