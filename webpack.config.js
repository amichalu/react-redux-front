var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    //entry: './index.js', // ./src/index.js is default entry
    output: { path: path.join(__dirname, 'public'), filename: 'index.js' },
    
    optimization: {
        splitChunks: {
        chunks: 'all'
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        proxy: {
          '/documents': 'http://localhost:8000',
          '/documentarticles': 'http://localhost:8000',

        }
    }
};