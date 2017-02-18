const elixir = require('laravel-elixir');
require('laravel-elixir-webpack-official');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
  mix
  .less('styles.less')
  .webpack('app.js')
});

elixir.webpack.mergeConfig({
  // entry: { 
  //   welcome: "./resources/assets/js/app.js",
  //   list: "./resources/assets/js/list.js"
  // },
  // output: {
  //   path: __dirname,
  //   filename: "[name].bundle.js"
  // },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
});
