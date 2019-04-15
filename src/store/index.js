import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={   //要设置的全局访问的state对象
  xiaoyuUrl:"static/img/1.jpg",
};
const getters = {   //实时监听state值的变化(最新状态)
  isShow(state) {  //承载变化的showFooter的值
    return state.showFooter
  },
  getChangedNum(){  //承载变化的changebleNum的值
    return state.changableNum
  }
};
const mutations = {

};
const actions = {
  hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hide');
  },
  showFooter(context) {  //同上注释
    context.commit('show');
  },
  getNewNum(context,num){   //同上注释，num为要变化的形参
    context.commit('newNum',num)
  }
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;
