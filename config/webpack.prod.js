const path = require('path')
const env = require('./env.prod')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const productionGzipExtensions = ['js', 'css']

module.exports = {
  mode: 'production',
  // webpack 5.x default output ES6
  target: ['web', 'es5'],
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'script/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
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
          MiniCssExtractPlugin.loader,
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
          filename: 'imgs/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8].[ext]'
        }
      },
      {
        exclude: [/\.(js|s?css)$/, /\.html$/, /\.json$/],
        type: 'asset/resource',
        generator: {
          filename: 'media/[name].[hash:8].[ext]'
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
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeOptionalTags: false,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true,
        removeCommentsFromCDATA: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css'
    }),
    new CompressionWebpackPlugin({
      filename: '[path][name].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      maxInitialRequests: 5,
      cacheGroups: {
        commons: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'common'
        }
      }
    },
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin({
        sourceMap: true
      })
    ]
  }
}
