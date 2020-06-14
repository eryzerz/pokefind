const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: "/node_modules/",
                include: path.resolve(__dirname, 'src', 'scripts'),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
})