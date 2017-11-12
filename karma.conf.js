//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
        'modules.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/moment/min/moment.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-messages/angular-messages.min.js',
        'bower_components/lodash/dist/lodash.core.min.js',
        'bower_components/lodash/dist/lodash.fp.min.js',
        'bower_components/lodash/dist/lodash.min.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-material/angular-material.js',
        'components/directives/directives.js',
        'components/directives/backToTop/backToTopDirective.js',
        'components/directives/backToTop/backToTopController.js',
        'components/directives/alert/*.js',
        'components/filters/filters.js',
        'components/filters/moment/moment.js',
        'components/filters/trusted/trusted.js',
        'components/services/services.js',
        'components/services/search/searchService.js',
        'components/services/search/searchResource.js',
        'components/services/detail/detailResource.js',
        'components/services/notification/notification.js',
        'app.js',
        'search/*.js',
        'search/pagination/pagination.js',
        'search/searchBox/searchBox.js',
        'detail/*.js'
    ],

    exclude: [
        'karma.config.js'
    ],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    reporters: ['progress', 'mocha', 'summary'],
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    plugins: [
        'karma-jasmine',
        'karma-junit-reporter',
        'karma-coverage',
        'karma-summary-reporter',
        'karma-mocha-reporter',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
    ],
    preprocessors: {
        'app/**/*.js': ['coverage'],
        'app/**/*.js': ['mocha'],
        'app/**/*.js': ['summary']
    },
    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },
    junitReporter: {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
    },
    summaryReporter: {
        show: 'failed',
        specLength: 50,
        overviewColumn: true
    },
    mochaReporter: {
        colors: {
            success: 'blue',
            info: 'bgGreen',
            warning: 'cyan',
            error: 'bgRed'
        },
        symbols: {
            success: '+',
            info: '#',
            warning: '!',
            error: 'x'
        }
    }
  });
};
