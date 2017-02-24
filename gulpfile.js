var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    $ = require('gulp-load-plugins')(),
    rename = require('gulp-rename');

var sassPaths = [
        'node_modules/foundation-sites/scss',
        'node_modules/motion-ui/src'
    ];

gulp.task('sass', function() {
    gulp.src('src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('foundation', function() {
  return gulp.src('src/sass/vendors/foundation/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(minifyCss({compatibility: 'ie8'})) .pipe(rename("foundation.min.css"))
    .pipe(gulp.dest('src/css'));
});

gulp.task('default', ['sass', 'watch']);