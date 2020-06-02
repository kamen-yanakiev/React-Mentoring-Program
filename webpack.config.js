const path = require('path');

module.exports = {
    entry: './file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    rules: [{
        loader: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
          },
        options: {
            rootMode: "upward",
        }
    }],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
