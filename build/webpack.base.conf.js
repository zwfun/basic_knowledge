const webpackConfig = {
    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader'],
                exclude: /(node_modules)/
            }
        ]
    }
};

module.exports = webpackConfig;
