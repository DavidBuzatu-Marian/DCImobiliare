module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=8192"
      }
    ]
  }
};
