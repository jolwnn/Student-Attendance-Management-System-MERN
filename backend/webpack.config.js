const nodeExternals = require("webpack-node-externals")
const path = require("path")

const typicalReact = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    }
  ]
}

const clientConfig = {
  entry: "../frontend/src/studentdatabase.js", //input from
  output: {
    path: path.resolve(__dirname, "../frontend/public"),
    filename: "main.js" //output to
  },
  mode: "development",
  module: typicalReact
}

const serverConfig = {
  entry: "./server.js",
  output: {
    path: __dirname,
    filename: "./server-compiled.js"
  },
  externals: [nodeExternals()],
  target: "node",
  mode: "production",
  module: typicalReact
}

module.exports = [clientConfig, serverConfig]