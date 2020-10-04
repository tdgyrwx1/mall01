import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'//吐司插件
import FastClick from 'fastclick'//fastclick库 解决300ms延迟
import LazyLoad from 'vue-lazyload'//图片懒加载 vue-lazyload库

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(Toast)
// 解决300ms延迟问题 调用attach函数
FastClick.attach(document.body)

Vue.use(LazyLoad, {
  loading: require('assets/img/common/placeholder.png')//loading: 传入占位图 这里导入要使用require
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
