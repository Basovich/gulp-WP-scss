const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');


// Static server https://www.browsersync.io/docs/gulp
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    notify: false,
    // tunnel: true,
    // tunnel: "basovich" //Demonstration page: http://basovich.localtunnel.me
  });
});


function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: '.min',
      prefix: ''
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

function watch() {
  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./src/template/**/*.html', html);
  gulp.watch('./src/js/**/*.js', js);
}

function cleaner() {
  return del(['build/*']);
}

function html() {
  return gulp.src('./src/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

function js() {
  return gulp.src('./src/js/*.js')
    .pipe(rigger())
    .pipe(gulp.dest('build/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

function images() {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('build/img/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

gulp.task('sass', style);
gulp.task('watch', watch);
gulp.task('clean', cleaner);
gulp.task('layout', html);
gulp.task('scripts', js);
gulp.task('img', images);


gulp.task('build', gulp.series(cleaner,
  gulp.parallel(style,html,js,images)
));

gulp.task('dev', gulp.series('build',
  gulp.parallel('watch', 'server')
));
