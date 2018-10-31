// Loading Node Sass plugin
var sass = require('node-sass');
var jshintStylish = require('jshint-stylish');
var buildConfig = require('./BuildConfig')();

// The "wrapper" function
module.exports = function (grunt) {

    // Project and task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),             

        /**
         * Grunt Contrib Clean
         * Clean or delete the distribute files
         * https://www.npmjs.com/package/grunt-contrib-clean
         */
        clean: buildConfig.cleans,

        /**
         * Grunt Contrib Copy
         * Copy files and folders
         * https://www.npmjs.com/package/grunt-contrib-copy
         */
        copy: {
            distFonts: {
                files: [{
                    expand: true,
                    cwd: buildConfig.src.fonts.cwd,
                    src: buildConfig.src.fonts.files,
                    dest: buildConfig.dist.fonts
                }]
            },
            distImages: {
                expand: true,
                cwd: buildConfig.src.images.cwd,
                src: buildConfig.src.images.files,
                dest: buildConfig.dist.images
            }
        },

        /**
         * Grunt Sass
         * Compile Sass to CSS using node-sass
         * https://www.npmjs.com/package/grunt-sass
         */
        sass: {            
            dist: {
                options: {
                    implementation: sass,
                    sourceMap: false,
                    includePaths: [
                        buildConfig.src.scss.cwd,
                        buildConfig.nodeModules
                    ]
                },
                src: buildConfig.src.scss.files,
                dest: buildConfig.dist.scss
            }
        },

        /**
         * Grunt PostCSS
         * Apply several post-processors to your CSS using PostCSS.
         * https://www.npmjs.com/package/grunt-postcss
         */
        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: true
                },
                processors: [
                    require('autoprefixer')({ 
                        browsers: 'last 2 versions' 
                    }),
                    require('cssnano')({
                        preset: ['default', {
                            discardComments: {
                                removeAllButFirst: true,
                            }
                        }]
                    })
                ]
            },
            dist: {
                src: buildConfig.src.styles.files,
                dest: buildConfig.dist.styles
            }
        },

        /**
         * Grunt Webpack
         * Use Webpack with Grunt
         * https://www.npmjs.com/package/grunt-webpack
         */
        webpack: {
            options: {
                mode: 'production'
            },
            dist: require('./webpack.config')
        },

        /**
         * Grunt Contrib Jshint
         * Validate files with JsHint
         * https://www.npmjs.com/package/grunt-contrib-jshint
         */
        jshint: {
            files: [
                'gruntfile.js',
                'BuildConfig.js',
                'webpack.config.js',
                buildConfig.src.scripts.files,
                buildConfig.src.json.files
            ],
            options: { 
                jshintrc: true,
                reporter: jshintStylish
            }
        },

        /**
         * Grunt Contrib Watch
         * Monitor files and excute tasks
         * https://www.npmjs.com/package/grunt-contrib-watch
         */
        watch: {
            styles: {
                files: buildConfig.src.scss.watch,
                tasks: [
                    'scss',
                    'styles'
                ],
                options: {
                    cwd: buildConfig.src.scss.cwd,
                }
            },
            scripts: {
                files: buildConfig.src.scripts.watch,
                tasks: ['scripts'],
                options: {
                    cwd: buildConfig.src.scripts.cwd,
                }
            }, 
            json: {
                files: buildConfig.src.json.watch,
                tasks: ['scripts'],
                options: {
                    cwd: buildConfig.src.json.cwd,
                }
            },           
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            }
        }
    });

    // Loading Grunt plugins and tasks
    require('load-grunt-tasks')(grunt);

    // friendly aliases
    grunt.registerTask('fonts', 'copy:distFonts');
    grunt.registerTask('images', 'copy:distImages');
    grunt.registerTask('scripts', 'webpack:dist');
    grunt.registerTask('scss', 'sass:dist');
    grunt.registerTask('styles', 'postcss:dist');

    // Build tasks
    grunt.registerTask('build', [
        'clean',
        'scss',
        'styles',
        'scripts',
        'fonts',
        'images'
    ]);

    // Default tasks
    grunt.registerTask('default', [
        'build',
        'watch'
    ]);
};
