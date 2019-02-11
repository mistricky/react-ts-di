import * as Path from "path";
import { HotModuleReplacementPlugin } from "webpack";

export default {
  entry: "./src/main.tsx",
  output: {
    filename: "main.bundle.js",
    path: Path.resolve("./dist"),
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(tsx|ts)/,
        loader: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts", ".jsx", ".json"]
  },
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    inline: true,
    port: 8080
  }
};
