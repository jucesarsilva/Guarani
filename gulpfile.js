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
        './app/components/directives/directives.js',
        './app/components/directives/popover/tooltip.js',
        './app/components/directives/popover/popover.js',
        './app/components/directives/popover/helpers/*.js',
        './app/components/directives/alert/*.js',
        './app/components/filters/filters.js',
        './app/components/filters/moment/moment.js',
        './app/components/filters/treusted/treusted.js',
        './app/components/services/services.js',
        './app/components/services/contact/contactService.js',
        './app/components/services/notification/notification.js',
        './app/app.js',
        './app/contacts/contacts.js',
        './app/info/info.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/* JS minifier */
gulp.task('uglify', function () {
    return gulp.src([
        './app/modules.js',
        './app/components/directives/directives.js',
        './app/components/directives/popover/tooltip.js',
        './app/components/directives/popover/popover.js',
        './app/components/directives/popover/helpers/*.js',
        './app/components/directives/alert/*.js',
        './app/components/filters/filters.js',
        './app/components/filters/moment/moment.js',
        './app/components/filters/treusted/treusted.js',
        './app/components/services/services.js',
        './app/components/services/contact/contactService.js',
        './app/components/services/notification/notification.js',
        './app/app.js',
        './app/contacts/contacts.js',
        './app/info/info.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('./app/dist/temp'));
});

/* HTML minifier */
gulp.task('html-min', function() {
    return gulp.src([
        './app/index.html', 
        './app/components/directives/alert/alert.html',
        './app/components/directives/popover/popover.html',
        './app/components/directives/popover/tooltip.html',
        './app/contacts/contacts.html',
        './app/info/info.html'
    ])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./app/dist'));
});

/* CSS minifier */
gulp.task('css-min', function () {
    return gulp.src([
        './app/components/angular-motion/modules/fade.css',
        './app/components/angular-motion/angular-motion.css',
        './app/components/directives/alert/alert.css',
        './app/app.css',
        './app/custom.css'
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



/**
 * @name unit:coverage
 * @description Runs unit tests with karma/phantomjs/mocha
 * and generates code coverage report in coverage/
 */
gulp.task('unit:coverage', function(done) {
    return new karma.Server({
        configFile:  __dirname + '/karma.conf.js',
        action: 'run',
        singleRun: true,
        preprocessors: {
            './app/**/*.spec.js': ['jasmine', 'mocha', 'chai']
        },
        reporters: ['progress'],
        coverageReporter: {
            type : 'html',
            dir : 'coverage/',
            subdir: '/'
        }
    }, done).on('error', function(err) {
        throw err;
    }).start();
});
    

/**
 * @name coverage
 * @description Generates and shows the code coverage report
 */
gulp.task('coverage', ['unit:coverage'], function() {
    return gulp.src('./coverage/js/index.html')
        .pipe(open());
});