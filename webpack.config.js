var path = require("path");
var webpack = require("webpack");
 
module.exports = {   
  entry: { 
    welcome: "./resources/assets/js/app.js",
    list: "./resources/assets/js/list.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  devtool: "#source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },     
      {
        test: /\.jsx|\.js$/,
        loaders: ["babel"],
        include: path.join(__dirname, "src")
      }
    ]
  }
};