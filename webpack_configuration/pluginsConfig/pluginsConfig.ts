import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack = require("webpack");
import {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "../types/types";

export function pluginsConfig(options:BuildOptions): WebpackPluginInstance[] {
    const {path}=options

    const html= new HtmlWebpackPlugin({
        template: path.html
    })

    return [html]
}