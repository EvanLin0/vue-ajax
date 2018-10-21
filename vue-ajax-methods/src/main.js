// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'; // 引入 vue-resource 来发送 ajax;
import Axios from 'axios'; // cnpm install axios --save 来发送 ajax;

Vue.prototype.$axios = Axios; // 全局注册使用 Axios;

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
