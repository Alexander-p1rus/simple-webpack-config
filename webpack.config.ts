import webpack = require("webpack");
import {extensionsConfig} from "./webpack_configuration/extenstionsConfig/extensionsConfig";
import {rulesConfig} from "./webpack_configuration/rulesConfig/rulesConfig";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from "path";
import {EnvVariables} from "./webpack_configuration/types/types";
import {buildConfig} from "./webpack_configuration/buildConfig/buildConfig";


module.exports = (env: EnvVariables) => {
    const htmlPath = path.resolve(__dirname, 'public', 'index.html')
    const entryPath = path.resolve(__dirname, 'src', 'index.ts')
    const outputPath = path.resolve(__dirname, 'bundle',)

    const isDev = env.mode === 'development'

    const mode = env.mode === 'development'
        ? 'development'
        : 'production'

    const config = buildConfig({
        path: {
            entry: entryPath,
            html: htmlPath,
            output: outputPath
        },
        isDev: isDev,
        mode: mode
    })

    return config
}

