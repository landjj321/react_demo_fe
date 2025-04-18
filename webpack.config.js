const HtmlWebpackPlugin = require('html-webpack-plugin');
// 优化打包速度
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
//压缩文件gzip
const CompressionPlugin = require('compression-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 打包信息
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  // devtool: 'source-map',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    //
    entry: './src/index.js',
    //测试 mini-router
    // entry: './mini-router-demo/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        //这里会继承splitChunks下的配置和默认配置，如 上面的 chunks："all"
        //下面的配置优先级更高，会覆盖上面的配置，如 chunks："initial"
        //因为 webpack4 的零配置，会有很多默认配置，所以对于细节和实际未知的项目编译结果时，务必确定并理解默认值的具体逻辑，以排查问题所在。（之前踩过不少坑~）

        echarts: {
          name: 'chunk-echarts',
          priority: 10,
          test: /[\/]node_modules[\\/]_?echarts(.*)/,
        },
        antvS2: {
          name: 'chunk-antv-s2',
          priority: 10,
          test: /[\/]node_modules[\\/]_?@antv\/s2(.*)/,
        },
        aceBuilds: {
          name: 'chunk-ace-builds',
          priority: 10,
          test: /[\/]node_modules[\\/]_?ace-builds(.*)/,
        },
        lodash: {
          name: 'chunk-lodash',
          priority: 10,
          test: /[\/]node_modules[\/]lodash(.*)/,
        },
        lodash: {
          name: 'chunk-lodash',
          priority: 10,
          test: /[\/]node_modules[\/]lodash(.*)/,
        },
        mobx:{
          name:"chunk-mobx",
          priority:10,
          test: /[\/]node_modules[\/](mobx|mobx-react)(.*)/,
          // (react|react-dom)
        }
        // libs: {
        //   name: 'chunk-libs', //包名称，会和hash值编译生成最终 chunk-libs.8880c0aa.js （hash值会变化，对于缓存优化这里是可以思考的一个点。）
        //   test: /[\\/]node_modules[\\/]/, // 正则过滤依赖包
        //   priority: 20, //设置包的打包优先级
        //   chunks: 'initial', //all 、async、initial
        // },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        // 开启缓存
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // {
      //     test: /\.(png|jpg|gif)$/,
      //     use: ["file-loader"]
      // },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5,
              ouputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
  resolve: {
    // 我们导入ts 等模块一般不写后缀名，webpack 会尝试使用这个数组提供的后缀名去导入
    extensions: ['.js', '.json', 'jsx', '.ts', '.tsx'],
    alias: {
      Component: path.resolve(__dirname, './src/component'),
      Img: path.resolve(__dirname, './src/img'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
    }),
    // 优化打包速度 dll 强化
    // new HardSourceWebpackPlugin(),
    // gzip
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
    // 打包信息
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
      generateStatsFile: true, // 是否生成stats.json文件
    }),
  ],
  devServer: {
    contentBase: __dirname + '/dist',
    host: '0.0.0.0',
    port: 8081,
    open: false, //自动打开浏览器
    hot: true, //热更新
    disableHostCheck: true,
  },
});
