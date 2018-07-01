var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

const PRODUCTION = process.env.NODE_ENV === "production";

console.log("Production mode?", PRODUCTION);

const productionEntry = ["./src/index.tsx"];

function getPlugins() {
    return [
        new webpack.EnvironmentPlugin({
            NODE_ENV: PRODUCTION ? "production" : "development", // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        }),
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ];
}

module.exports = {
    devtool: !PRODUCTION
        ? process.env.WEBPACK_DEVTOOL || "source-map"
        : undefined,
    devServer: !PRODUCTION
        ? {
              historyApiFallback: true,
              hotOnly: true,
              host: "0.0.0.0",
              hot: true,
              port: parseInt(process.env.NODE_PORT, 10) || 3000
          }
        : undefined,
    entry: {
        main: PRODUCTION
            ? productionEntry
            : [
                  "react-hot-loader/patch",
                  "./src/index.tsx" // your app's entry point
              ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        // filename: "bundle.js",
        // chunkFilename: "[chunkhash].js",
        publicPath: "/"
    },
    resolve: {
        alias: { "@src": path.resolve(__dirname, "./src") },
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: -10
                }
            }
        },
        runtimeChunk: true
    },
    plugins: getPlugins(),
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, "./src"),
                use: PRODUCTION
                    ? ["awesome-typescript-loader"]
                    : ["react-hot-loader/webpack", "awesome-typescript-loader"]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
