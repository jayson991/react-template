const path = require('path')
const env = require('./env.dev')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx'),
    vendor: ['react', 'react-dom']
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    compress: true,
    host: '0.0.0.0',
    historyApiFallback: true
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8].[ext]'
        }
      },
      {
        exclude: [/(^|\.(js|jsx|css|scss|html|json))$/],
        type: 'asset/resource',
        generator: {
          filename: 'medias/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
      NODE_ENV: env.NODE_ENV,
      API_ENDPOINT: env.API_ENDPOINT
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      showErrors: true,
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: 'dist'
        }
      ]
    })
  ]
}
