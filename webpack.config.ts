import webpack = require("webpack");
import {extensionsConfig} from "./webpack_configuration/extenstionsConfig/extensionsConfig";
import {rulesConfig} from "./webpack_configuration/rulesConfig/rulesConfig";

const path = require('path')


const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        clean: true,
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'bundle'),
    },
    module: {
        rules: rulesConfig()
    },
    resolve: extensionsConfig()
};

module.exports = config

