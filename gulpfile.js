var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    $ = require('gulp-load-plugins')(),
    rename = require('gulp-rename');
//    browserSync = require('browser-sync').create(),
//    reload      = browserSync.reload;

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

///* Reload task */
//gulp.task('bs-reload', function () {
//    browserSync.reload();
//});

///* Prepare Browser-sync for localhost */
//gulp.task('browser-sync', function() {
//    browserSync.init(['css/*.css', 'js/*.js'], {
//        /*
//        I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
//        */
//        proxy: 'your_dev_site.url'
//        /* For a static server you would use this: */
//        /*
//        server: {
//            baseDir: './'
//        }
//        */
//    });

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