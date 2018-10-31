var path = require('path');

module.exports = function() {
    // Root Paths
    var appBasePath = path.resolve(__dirname, 'src') + '/',       
        distBaseJsPath = path.resolve(__dirname, 'js') + '/',
        distBaseFontsPath = path.resolve(__dirname, 'fonts') + '/',
        distBaseImagesPath = path.resolve(__dirname, 'images') + '/',
        nodeModulesBasePath = path.resolve(__dirname, 'node_modules') + '/';

    // Config
    var buildConfig = {        
        'src': {
            'basePath': appBasePath,
            'fonts': {
                'cwd': appBasePath + 'fonts/',
                'files': [
                    '**.*'
                ]
            },
            'images': {
                'cwd': appBasePath + 'images/',
                'files': [
                    '**/*.{jpg,gif,png}'
                ]
            },
            'scss': {
                'cwd': appBasePath + 'scss/',
                'watch': '**/*.{sass,scss}',
                'files': appBasePath + 'scss/styles.scss'
            },
            'styles': {
                'cwd': appBasePath + 'css/',
                'watch': '**/*.css',
                'files': appBasePath + 'css/main.css'
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
            'fonts': distBaseFontsPath,
            'images': distBaseImagesPath,
            'scss': appBasePath + 'css/main.css',
            'styles': 'style.css',
            'scripts': 'bundle.min.js',
        },
        'cleans': [
            'style.css',
            'style.css.map',
            distBaseFontsPath + '**.*',
            distBaseImagesPath + '**.*',
            distBaseJsPath + 'bundle.min.js',
            distBaseJsPath + 'bundle.min.js.LICENSE',
        ],
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
