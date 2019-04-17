import Vue from 'vue'
import App from './App'
import router from './router'
/* 引入less */
//import './index.less';
/* mint-ui 组件库 */
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

/* 组件库element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* iview 组件库 */
/*
*import iView from 'iview';
*import 'iview/dist/styles/iview.css';
*Vue.use(iView);
*/

/* 引入vuex */
import store from './store'




Vue.config.productionTip = false
/* 设置全局变量每个组件才可以访问到 $emit -- $on */
/* 方法1 用export 和 import  但子组件中要引入当前文件 */
export var ev = new Vue()

// 引入animate.css
import animate from 'animate.css';

// 引入全局样式

import "@/assets/css/base.css"


/* eslint-disable no-new */


Vue.prototype.$store = store
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
