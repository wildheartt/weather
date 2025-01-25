const path = require('path');

module.exports = {
  entry: './js/index.js', // ????
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // здесь лежит ваш index.html
    },
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
