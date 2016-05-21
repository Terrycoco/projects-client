
var path = require('path');
var webpack = require('webpack');
var atImport = require('postcss-import');  //plugin via postcss-loader
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack/hot/only-dev-server',
        './src/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    devServer: {
      historyApiFallback: true, //needed for react-router to work
      contentBase: './',
      hot: true  //enable hot module plugin
    },
      resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            reducers:     path.resolve(__dirname, 'src', 'reducers'),
            actions:      path.resolve(__dirname, 'src', 'actions'),
            styles:       path.resolve(__dirname, 'src', 'styles'),
            images:       path.resolve(__dirname, 'src', 'images'),
            pages:        path.resolve(__dirname, 'src', 'pages'),
            frames:       path.resolve(__dirname, 'src', 'frames'),
            lib:          path.resolve(__dirname, 'src', 'lib'),
            utils:        path.resolve(__dirname, 'src', 'utils'),
            examples:     path.resolve(__dirname, 'src', 'examples')
        },
        extensions: ['', '.js','.jsx', '.css', '.png', 'jpg', '.less']
      }, 

    module: {
        loaders: [
            { test: /\.jsx$/,
                loader: 'babel',
                include: path.join(__dirname, 'src')
            },
            { test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/

            },
            {
              test: /\.css$/,
                loaders:  [
                    'style-loader',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
                    'autoprefixer-loader'
                ]
            },
            { 
              test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
                    'autoprefixer-loader',
                    'less'
                ]
            },
            { test: /\.(png|jpg)$/,
                loader: "url-loader?limit=10000&minetype=image/jpg"
            }
        ]
    },
    debug: true,

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('app.css')
      ]


}
