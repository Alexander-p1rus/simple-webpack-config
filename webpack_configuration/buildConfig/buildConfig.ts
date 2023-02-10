import webpack from "webpack";
import {BuildOptions} from "../types/types";
import path from "path";
import {rulesConfig} from "../rulesConfig/rulesConfig";
import {extensionsConfig} from "../extenstionsConfig/extensionsConfig";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {pluginsConfig} from "../pluginsConfig/pluginsConfig";

export function buildConfig(options: BuildOptions): webpack.Configuration {
    const {path, isDev, mode} = options

    return {
        mode: mode,
        entry: path.entry,
        output: {
            clean: true,
            filename: '[name].[contenthash:8].js',
            path: path.output,
        },
        module: {
            rules: rulesConfig()
        },
        resolve: extensionsConfig(),
        plugins: pluginsConfig(options)
    };


}