import Vue from 'vue'
import Router from 'vue-router';
import page from '@/pages/page/page.vue'; // page

/* 首页 */
import home from '@/pages/home/home.vue';
import zongjie from '@/pages/home/zongjie/home_zj.vue';
import suanfa from '@/pages/home/zongjie/suanfa.vue';


/* 喜欢 */
import love from '@/pages/love/love.vue';



/* 我的 */
import my from '@/pages/my/my.vue';
import photo from '@/pages/my/photo/photo.vue';
import bgc from '@/pages/my/bgc/bgc.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: page,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/love',
          name: 'love',
          component: love
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    },
    /* ------------------home------------- */
    /* 总结 */
    {
      path: '/home/zongjie',
      name: 'zongjie',
      component: zongjie
    },
    /* 算法 */
    {
      path: '/home/zongjie/suanfa',
      name: 'suanfa',
      component: suanfa
    },
    /* -------------------我的------------- */
    /* 相册 */
    {
      path: '/my/photo',
      name: 'photo',
      component: photo
    },
    /* 背景 */
    {
      path: '/my/background',
      name: 'background',
      component: bgc
    },
  ]
})
