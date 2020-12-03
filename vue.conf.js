// 引入CDN配置信息
import cdnConfig from "./cdnConfig";

module.exports = {
  // 打包后的文件夹名称
  outputDir: "html",
  // API请求转发设置
  devServer: {
    proxy: {
      "/api": {
        target: "https://blog.xmxui.com/api",
        changeOrigin: true,
        pathRewrite: {"^/api": ""}
      }
    },
  },
  chainWebpack: config => {
    // 如果是生产环境，则配置CDN信息，本地不配置CDN
    if (process.env.NODE_ENV === "production") {
      config.plugin("html").tap(args => {
        args[0].css = cdnConfig.css;
        args[0].js = cdnConfig.js;
        return args;
      });
      config.externals({...cdnConfig.nameConfig});
      config.plugin("html").tap(args => {
        args[0].minify = false;
        return args;
      });
    }
  }
}
