var path = require('path');

module.exports = function() {
    // Root Paths
    var appBasePath = path.resolve(__dirname, 'src') + '/',       
        distBaseJsPath = path.resolve(__dirname, 'js') + '/',
        nodeModulesBasePath = path.resolve(__dirname, 'node_modules') + '/';

    // Config
    var buildConfig = {
        'dependencies': {
            'jquery': {
                'script': {
                    'cwd': nodeModulesBasePath + 'jquery/dist/',
                    'files': [
                        nodeModulesBasePath + 'jquery/dist/jquery.min.js'
                    ]
                }
            }
        },
        'src': {
            'basePath': appBasePath,            
            'scss': {
                'cwd': appBasePath + 'scss/',
                'watch': '**/*.{sass,scss}',
                'files': appBasePath + 'scss/styles.scss'
            },
            'scripts': {
                'cwd': appBasePath + 'scripts/',
                'watch': '**/*.js',
                'files': [
                    appBasePath + 'scripts/**/*.js'
                ],
                'file': appBasePath + 'scripts/index.js'
            },
            'json': {
                'cwd': appBasePath + 'scripts/',
                'watch': '**/*.json',
                'files': [
                    appBasePath + 'scripts/**/*.json'
                ]
            }
        },
        'dist': {            
            'distBaseJsPath': distBaseJsPath,
            'styles': '../style.css',
            'scripts': 'bundle.min.js',
            'json': 'all.min.json'
        },
        'nodeModules': nodeModulesBasePath,
        'ignored': [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'fonts'),
            path.resolve(__dirname, 'inc'),
            path.resolve(__dirname, 'js'),
            path.resolve(__dirname, 'languages'),
            'LICENSE',
            '*.{php,babelrc,gitignore,xml,dist,md,png,css}'
        ]
    };

    return buildConfig;
};
