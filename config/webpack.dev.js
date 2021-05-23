const path = require('path')
const env = require('./env.dev')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: [path.resolve(__dirname, '../src/index.js')],
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
  },
  devServer: {
    hot: true,
    port: 8080,
    compress: true,
    progress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
      NODE_ENV: env.NODE_ENV,
      API_ENDPOINT: env.API_ENDPOINT,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: paths.src + '/assets',
    //       to: 'assets',
    //       globOptions: {
    //         ignore: ['*.DS_Store'],
    //       },
    //     },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      name: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
