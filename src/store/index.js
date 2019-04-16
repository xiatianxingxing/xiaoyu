import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={   //要设置的全局访问的state对象
  xiaoyuUrl:"static/img/1.jpg",
};
const getters = {
  /*
  isShow(state) {
    return state.showFooter
  },*/

};
const mutations = {
  changeUrl(star,val){
    state.xiaoyuUrl = val
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
