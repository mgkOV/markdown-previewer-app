const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './src/index.jsx'
  ],
  output:{
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'jquery': 'jquery'
    })
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components'
    ],
    alias: {
      appStyles: 'src/styles/styles.scss',
      content: 'src/content.json'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['es2015', 'react', 'stage-0' ]
        }
      },
      {
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      (__dirname + '/node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
