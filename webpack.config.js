var path = require("path");
var webpack = require("webpack");
//modified and derived from: https://www.garysieling.com/blog/using-multiple-entry-points-webpack
module.exports = {   
  entry: { 
    welcome: "./resources/assets/js/welcome.js",
    list: "./resources/assets/js/list.js",
    details: "./resources/assets/js/details.js"
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