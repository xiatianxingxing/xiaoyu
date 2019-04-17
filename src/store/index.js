import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={   //要设置的全局访问的state对象
  xiaoyuUrl:"static/img/4.jpg",

  pageNum: '',  // 首页下导航样式
};
const getters = {
  /*
  isShow(state) {
    return state.showFooter
  },*/

};
const mutations = {
  changeUrl(state,val){
    state.xiaoyuUrl = val
  },
  pageNav(state,num){
    state.pageNum = num
  }
};
const actions = {

};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;
