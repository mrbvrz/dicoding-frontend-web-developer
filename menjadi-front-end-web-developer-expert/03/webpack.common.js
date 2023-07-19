const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpe?g|svg)&/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),

        new CompressionPlugin({
            algorithm: 'gzip',
            test: /.js$|.css$/,
        }),

        new BundleAnalyzerPlugin({
            analyzerPort: 9010,
            // defaultSizes: 'gzip'
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                    // globOptions: {
                    //     ignore: ['**/images/**'],
                    // },
                },
            ],
        }),

        new ImageminWebpWebpackPlugin({
            config: [
                {
                    test: /\.(jpe?g|png)/,
                    options: {
                        quality: 50,
                    },
                },
            ],
            overrideExtension: true,
        }),

        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 70,
                    progressive: true,
                }),
            ],
        }),

        new WorkboxWebpackPlugin.GenerateSW({
            swDest: './sw.bundle.js',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://restaurant-api.dicoding.dev/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'tastelab-cache',
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
            ],
        })

        // new InjectManifest({
        //     swSrc: path.resolve(__dirname, 'src/scripts/utils/sw.js'),
        //     swDest: 'sw.js',
        // }),
    ],
};
