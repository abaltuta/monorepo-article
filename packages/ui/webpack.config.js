const { ESBuildMinifyPlugin } = require('esbuild-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, argv) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-map' : 'eval',

    devServer: {
      open: true,
      hot: true,
      historyApiFallback: true
    },

    entry: {
      index: './src/index.tsx',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
            tsconfigRaw: require('./tsconfig.json')
          }
        },
      ]
    },

    optimization: {
      minimize: env.production ? true : false,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2015'
        })
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],

    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },

    stats: {
      assetsSort: 'size',
      children: false,
      chunksSort: 'size',
      excludeAssets: /.js.map/,
      modules: false
    }
  }
};
