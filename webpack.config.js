const path = require('node:path')
const DotenvPlugin = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebPackPlugin = require('copy-webpack-plugin')

const APPTITLE = 'Lot&Bid'
const APPPATH_ENV    = './.env'
const APPPATH_ENTRY  = './src/index.tsx'
const APPPATH_HTML   = './src/index.html'
const APPPATH_PUBLIC = './public'

module.exports = (env) =>{
  return {
    mode: 'development',
    entry: APPPATH_ENTRY,
    output: {
      publicPath: '/',
      filename: './app.js'
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
      alias: {
        Pages: path.resolve(__dirname, 'src/pages/'),
        Parts: path.resolve(__dirname, 'src/parts/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Auth: path.resolve(__dirname, 'src/auth/'),
        Data: path.resolve(__dirname, 'src/data/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Interfaces: path.resolve(__dirname, 'src/interfaces/'),
        Utils: path.resolve(__dirname, 'src/utils/'),
        Src: path.resolve(__dirname, 'src/')
      },
    },
    plugins: [
      new DotenvPlugin({path:APPPATH_ENV}),
      new CopyWebPackPlugin({patterns:[{from:APPPATH_PUBLIC}]}),
      new HtmlWebPackPlugin({
        title: APPTITLE,
        template: path.resolve(__dirname,APPPATH_HTML),
      }),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(ts|js|tsx|jsx|mjs|css|scss)$/,
          use: 'source-map-loader',
        },
        {
          test: /\.([cm]?ts|tsx)$/,
          loader: 'ts-loader'
        },
        {
          test:/\.css$/,
          use:['style-loader', 'css-loader']
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
  }
}
