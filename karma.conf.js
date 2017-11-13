//jshint strict: false
module.exports = function(config) {
  config.set({

    //basePath: '',

    files: [
        './app/modules.js',
        './app/bower_components/jquery/dist/jquery.min.js',
        './app/bower_components/moment/min/moment.min.js',
        './app/bower_components/angular/angular.js',
        './app/bower_components/angular-aria/angular-aria.js',
        './app/bower_components/angular-route/angular-route.js',
        './app/bower_components/angular-mocks/angular-mocks.js',
        './app/bower_components/angular-animate/angular-animate.js',
        './app/bower_components/angular-messages/angular-messages.min.js',
        './app/bower_components/lodash/dist/lodash.core.min.js',
        './app/bower_components/lodash/dist/lodash.fp.min.js',
        './app/bower_components/lodash/dist/lodash.min.js',
        './app/bower_components/angular-animate/angular-animate.js',
        './app/bower_components/angular-material/angular-material.js',
        './app/components/directives/directives.js',
        './app/components/directives/backToTop/backToTopDirective.js',
        './app/components/directives/backToTop/backToTopController.js',
        './app/components/directives/alert/*.js',
        './app/components/filters/filters.js',
        './app/components/filters/moment/moment.js',
        './app/components/filters/trusted/trusted.js',
        './app/components/services/services.js',
        './app/components/services/search/searchService.js',
        './app/components/services/search/searchResource.js',
        './app/components/services/detail/detailResource.js',
        './app/components/services/notification/notification.js',
        './app/app.js',
        './app/search/*.js',
        './app/search/pagination/pagination.js',
        './app/search/searchBox/searchBox.js',
        './app/detail/*.js'
    ],
    exclude: ['karma.config.js'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    reporters: ['progress', 'coverage'],
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    plugins: [
        'karma-jasmine',
        'karma-coverage',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-firefox-launcher'
    ],
    preprocessors: {
        './app/**/*.js': ['coverage']
    },
    coverageReporter: {
        includeAllSources: true,
        dir: './coverage/',
        reporters: [
            { type: "html", subdir: "html" },
            { type: 'text-summary' }
        ]
    },
    phantomjsLauncher: {
        exitOnResourceError: true
    }
  });
};
