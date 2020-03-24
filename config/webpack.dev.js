const path = require('path')
const env = require('./env.dev')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    open: true,
    inline: true,
    progress: true,
    historyApiFallback: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: 'imgs/[name].[hash:8].[ext]',
          outputPath: 'static',
          publicPath: path.resolve(__dirname, '../dist')
        }
      },
      {
        exclude: [/\.(js|css|scss)$/, /\.html$/, /\.json$/],
        loader: 'file-loader',
        options: {
          name: 'media/[path][name].[hash:8].[ext]',
          outputPath: 'static',
          publicPath: path.resolve(__dirname, '../dist')
        }
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
      'NODE_ENV': env.NODE_ENV,
      'API_ENDPOINT': env.API_ENDPOINT
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public/index.html'),
      showErrors: true
    }),
    new CopyWebpackPlugin([
      {
        from: 'public',
        ignore: ['index.html']
      }
    ])
  ]
}
