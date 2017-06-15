const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./entry.js",
  output: {
    path: path.join(__dirname, './public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.css$/,/\.scss$/],
        loaders: ['style-loader', 'css-loader', "sass-loader"],
      },
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
};
