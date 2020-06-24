module.exports = {
    mode: 'development',
    entry: {
        home: './src/home.js'
    },
    module: {
      rules: [
        {
            test: /\.css$/i,
            use: ['css-loader']
          },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };