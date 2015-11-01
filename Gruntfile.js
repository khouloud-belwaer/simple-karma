module.exports = function (grunt) {
    var plugins = ['karma-mocha'];
    var browsers = [];

    if (process.env.TRAVIS) {
        plugins.push('karma-firefox-launcher');
        browsers.push('Firefox');
    } else {
        plugins.push('karma-chrome-launcher');
        browsers.push('Chrome');
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        pkgFile: 'package.json',

        eslint: {
            target: [
                'gruntfile.js',
                'lib/*.js',
                'tasks/*.js',
                'test/*.js'
            ]
        },

        karma: {
            options: {
                browsers: browsers,
                frameworks: ['mocha'],
                plugins: plugins
            },
            single: {
                singleRun: true,
                files: [
                    {
                        src: 'node_modules/expect.js/index.js'
                    }, {
                        src: 'test/**/*.js'
                    }
                ]
            },
            config: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            merge: {
                options: {
                    files: ['node_modules/expect.js/index.js']
                },
                singleRun: true,
                files: [
                    {
                        src: 'test/**/*.js'
                    }
                ]
            },
            dev: {
                reporters: 'dots',
                background: true
            },
            auto: {
                autoWatch: true
            }
        },
        watch: {
            tests: {
                files: 'test/**/*.js',
                tasks: ['karma:dev:run']
            }
        }
    });

    grunt.loadTasks('tasks');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', ['karma:single', 'karma:config', 'karma:merge']);
    grunt.registerTask('default', ['eslint', 'test']);

};