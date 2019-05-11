const path = require('path')

module.exports = {
    publicPath: './',
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                // '@components': path.resolve(__dirname, 'src', 'components'),
                // '@services': path.resolve(__dirname, 'src', 'services'),
                // '@assets': path.resolve(__dirname, 'src', 'assets')
            }
        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/assets/scss/main.scss";`
            }
        }
    }
}