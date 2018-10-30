module.exports = {
    map: false,
    plugins: {
        'autoprefixer': {
            browsers: 'last 2 versions'
        },
        'cssnano': {
            preset: [
                'default', 
                {
                    discardComments: {
                        removeAllButFirst: true,
                    }
                }
            ]
        }
    }
}