var gulp        = require('gulp');
var gutil       = require('gulp-util');
var htmlmin     = require('gulp-html-minifier');
var uglify      = require("gulp-uglify");
var watch       = require("gulp-watch");
var jshint      = require("gulp-jshint");
var concat      = require("gulp-concat");
var cssmin      = require('gulp-cssmin');
var concatCss   = require('gulp-concat-css');
var clean       = require('gulp-clean');
var webserver   = require('gulp-webserver');
var karma       = require("karma");
var open        = require('gulp-open');

/* Default */
gulp.task("default", function () {
    gulp.start('uglify');
    gulp.start('html-min');
    gulp.start('css-min');
    gulp.start('concat-js');
    gulp.start('concat-css');
    gulp.start('remove');
});

/* Watch scripts change */
gulp.task('watch', function () {
    gulp.watch('./app/components/**/**/**/*.js', function (event) {
        gulp.start('jshint');
        gulp.start('uglify');
        gulp.start('html-min');
        gulp.start('css-min');
        gulp.start('concat-js');
        gulp.start('concat-css');
    });
});

/* Server */
gulp.task('server', ['watch'], function() {
 gulp.src('./app/')
   .pipe(webserver({
        fallback: './app/index.html'
   }));
});

/* Jshint */
gulp.task('jshint', function () {
    return gulp.src([
        './app/modules.js',
        './app/components/**/**/*.js',
        './app/app.js',
        './app/search/**/**/*.js',
        './app/detail/**/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/* JS minifier */
gulp.task('uglify', function () {
    return gulp.src([
        './app/modules.js',
        './app/components/**/**/*.js',
        './app/app.js',
        './app/search/**/**/*.js',
        './app/detail/**/**/*.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('./app/dist/temp'));
});

/* HTML minifier */
gulp.task('html-min', function() {
    return gulp.src([
        './app/modules.html',
        './app/components/**/**/*.html',
        './app/app.html',
        './app/search/**/**/*.html',
        './app/detail/**/**/*.html'
    ])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./app/dist'));
});

/* CSS minifier */
gulp.task('css-min', function () {
    return gulp.src([
        './app/modules.css',
        './app/components/**/**/*.css',
        './app/app.css',
        './app/search/**/**/*.css',
        './app/detail/**/**/*.css'
    ])
    .pipe(cssmin())
    .pipe(gulp.dest('./app/dist/temp'));
});

/* Concats */
gulp.task('concat-js', ['uglify'], function() {
    return gulp.src([
        './app/dist/temp/*.js'
    ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('concat-css',  ['css-min'], function () {
  return gulp.src([
        './app/dist/temp/*.css'
    ])
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('./app/dist'));
});

/* Clean */
gulp.task('remove', ['concat-js', 'concat-css'], function () {
    gutil.log('Starting remove task.');
    return gulp.src('./app/dist/temp', {read: false}).pipe(clean());
});