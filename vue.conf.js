// 常用CDN链接定义
const cdnList = {
  css: [
    // Element UI CSS
    "https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css"
  ],
  js: [
    // VueJS
    "https://cdn.bootcss.com/vue/2.6.10/vue.min.js",
    // axios
    "https://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js",
    // Vue-Router
    "https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js",
    // VueX
    "https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js",
    // Element UI JS
    "https://cdn.bootcss.com/element-ui/2.13.0/index.js"
  ]
};

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
        args[0].css = cdnList.css;
        args[0].js = cdnList.js;
        return args;
      });
      config.externals({
        "vue": "Vue",
        "axios": "axios",
        "vue-router": "VueRouter",
        "vuex": "vuex",
        "element-ui": "ELEMENT"
      });
      config.plugin("html").tap(args => {
        args[0].minify = false;
        return args;
      });
    }
  }
}
