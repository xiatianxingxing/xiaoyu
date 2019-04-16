<template>
    <div id="xiaoyu" class="img"
    :style="{'backgroundImage':'url('+url+')'}">
        <div>
          <router-view></router-view>
        </div>
        <footer class="footer">
          <router-link class="foot_nav" :class="pageNum == 0? 'avtive':''" @click.native="pageNum='0'" to="/">
            <div>
              <i class="home_icon img1 nav_pic"></i>
            </div>
            <p class="title">首页</p>
          </router-link>
          <router-link class="foot_nav" :class="pageNum == 1? 'avtive':''"  @click.native="pageNum='1'" to="/love">
            <div>
              <i class="love_icon img1 nav_pic"></i>
            </div>
            <p class="title">喜欢</p>
          </router-link>
          <router-link class="foot_nav" :class="pageNum == 2? 'avtive':''" @click.native="pageNum='2'" to="/my">
            <div>
              <i class="my_icon img1 nav_pic"></i>
            </div>
            <p class="title">我的</p>
          </router-link>
        </footer>
    </div>
</template>
<script>

export default {
  name: 'page',
  data () {
    return {
      title : "我是标题" ,
      pageNum: 0,
      url:this.$store.state.xiaoyuUrl
    }
  },
  methods: {},
  mounted () {

  }
}
</script>

<style scoped lang="less">
  #xiaoyu{
    width: 100vw;
    height: 100vh;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
    display: flex;
    background-color: rgba(255,255,255,0.6);
  }
  .foot_nav{
    flex:1;
    color: #515151;
    font-size: 0.12rem;
    text-align: center;
  }
  .nav_pic{
    display: block;
    width: 0.3rem;
    height: 0.3rem;
    margin: 0.02rem auto;
  }
  .title{
    line-height: 0.1rem;
  }
  .avtive .title{
    color: #3385ff;
  }
  .home_icon{
    background-image: url("~@/assets/img/home.png")
  }
  .love_icon{
    background-image: url("~@/assets/img/xin.png");
  }
  .my_icon{
    background-image: url("~@/assets/img/my.png");
  }
  .avtive  .home_icon{
    background-image: url("~@/assets/img/home_c.png");
  }
  .avtive .love_icon{
    background-image: url("~@/assets/img/xin_c.png");
  }
  .avtive .my_icon{
    background-image: url("~@/assets/img/my_c.png");
  }

</style>
