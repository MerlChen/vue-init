/**
 * @Author: 青丝
 * @CreateTime: 2020/12/04
 * @description: 此文件是用于配置CDN清单及对应的包名配置
 */

// 常用CDN链接定义
const cdnList = {
  // CSS的CDN链接，直接塞入数组内即可，无需其他操作
  css: [
    // Element UI CSS
    "https://cdn.bootcss.com/element-ui/2.13.0/theme-chalk/index.css"
  ],
  // JS的CDN链接，直接塞入数组内即可，无需其他操作
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
  ],
  // 此处是配置包名的，键是包名，值是引入时的名称
  nameConfig:{
    "vue": "Vue",
    "axios": "axios",
    "vue-router": "VueRouter",
    "vuex": "vuex",
    "element-ui": "ELEMENT"
  }
};
