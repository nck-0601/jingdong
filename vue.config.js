const path = require("path");

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                "@c":path.resolve(__dirname,"src/components"),
                "@p":path.resolve(__dirname,"src/page"),
                "@a":path.resolve(__dirname,"src/assets"),
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/varless.less')
            ]
        }
    }
}
