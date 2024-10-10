import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{
        test: /\.ts?$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
            jsc: {
                parser: {
                    syntax: 'typescript',
                },
            },
        },
    }],
  },
};

export default config;
