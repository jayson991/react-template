const path = require('path')
const env = require('./env.prod')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const productionGzipExtensions = [ 'js', 'css' ]

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    vendor: [ 'react', 'react-dom' ]
  },
  output: {
    filename: 'script/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js' ],
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
          MiniCssExtractPlugin.loader,
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
        exclude: [ /\.(js|css|scss)$/, /\.html$/, /\.json$/ ],
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
      filename: '[path].gz[query]',
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
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      }),
      new TerserPlugin({
        sourceMap: false
      })
    ]
  }
}
