var path = require("path");
module.exports = {
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: '/public_html/'
    },
    open: true,
    openPage: ''
  },
  entry: {
    src: [
      "./src/main"
    ]
  },
  output: {
    path: path.resolve(__dirname, "public_html"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
          //plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
    ]
  }
};
