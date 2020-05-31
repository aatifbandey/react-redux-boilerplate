const path = require('path');
const fs = require('fs-extra');

// const ifProd = process.env.NODE_ENV === 'production' ? true : false;
const ifDev = process.env.NODE_ENV === 'development';

const appRootDir = require('app-root-dir');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const rldWeb = require('react-loadable/webpack');

const ReactPlugin = rldWeb.ReactLoadablePlugin;
const AssetsPlugin = require('assets-webpack-plugin');

const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const importResolver = require('./import.resolver');

const buildPath = './build/client';
const publicPath = 'http://localhost:8080/';

const buildStaticPath = './build/static';

fs.emptyDirSync(path.resolve(appRootDir.get(), buildPath));

fs.emptyDirSync(path.resolve(appRootDir.get(), buildStaticPath));

if (ifDev) {
  fs.copy(
    path.resolve(appRootDir.get(), '', '/', 'static'),
    path.resolve(appRootDir.get(), buildPath),
  );
}
module.exports = {
  entry: {
    web: ['react-hot-loader/patch', './client/index.js'].filter(Boolean),
  },
  output: {
    path: path.resolve(appRootDir.get(), buildPath),
    publicPath,
    filename: ifDev ? '[name].js' : '[name].[hash].js',
    chunkFilename: ifDev ? 'chunk.[name].js' : 'chunk.[name].[hash].js',
    crossOriginLoading: 'anonymous',
    globalObject: ifDev ? 'this' : 'window', // on dev we set to 'this' to handle comlink-loader bug. Until we can move to worker-plugin
  },
  mode: ifDev ? 'production' : 'development',
  devServer: {
    historyApiFallback: true, // to handle routes on server, it will server index.html page rather than giving 404
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // to support class-properties for react
        options: {
          presets: [
            '@babel/preset-env',
            {
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({})],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=10000&name=img/[name].[ext]',
      },
    ],
  },
  plugins: [
    new ReactPlugin({
      filename: path.resolve(
        appRootDir.get(),
        buildPath,
        'react-loadable.json',
      ),
    }),
    // new CopyWebpackPlugin([
    //  {
    //    from: path.resolve(appRootDir.get(), '', '/', 'static'),
    //    to: path.resolve(appRootDir.get(), buildPath, '../static'),
    //    flatten: true,
    //  },
    // ]),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(appRootDir.get(), buildPath),
    }),

    new HtmlWebpackPlugin({
      template: `${__dirname}/client/index.html`,
      filename: 'index.html',
      inject: 'body',
      chunksSortMode: 'none',
      // excludeChunks: ['web'],
      // excludeAssets: [/.*/]
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: importResolver.alias,
  },
};
