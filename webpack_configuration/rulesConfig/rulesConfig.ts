import webpack = require("webpack");

export function rulesConfig():webpack.RuleSetRule[] {
    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }


    return [tsLoader]
}