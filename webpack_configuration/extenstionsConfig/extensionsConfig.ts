import webpack = require("webpack");

export function extensionsConfig():webpack.ResolveOptions{
    return{
        extensions: ['.tsx', '.ts', '.js'],
    }
}