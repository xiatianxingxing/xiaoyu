<template>
  <div class="dong">
    <header>
      <div class="banner">
        <el-carousel height="1.8rem">
          <el-carousel-item v-for="(item,index) in banner"
                            :key="index"
                            :style="{backgroundImage:'url('+item.url+')'}">
            <h3></h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </header>
    <div class="header_nav">
      <ul>
        <li class="h_li fl" v-for="(nav,index) in  nav_mes" :class="index%4 == 0? 'lb_0':''">
          <router-link  :to="nav.pageUrl">
            <i class="h_nav_pic">
              <img :src="nav.url" alt="">
            </i>
            <p>{{nav.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <main>
      <div class="">
        <ul>
          <li></li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      banner:[
        {
          url:"./static/img/img1.png",
          title:''
        },
        {
          url:"./static/img/img2.png",
          title:''
        },
        {
          url:"./static/img/img3.png",
          title:''
        },
        {
          url:"./static/img/img4.png",
          title:''
        }
      ],
      nav_mes:[
        {
          title:"zongjie",
          url:"./static/img/nav1.png",
          pageUrl:"home/zongjie"
        },

        {
          title:"蛋糕",
          url:"./static/img/nav2.png",
          pageUrl:"/"
        },
        {
          title:"果冻",
          url:"./static/img/nav3.png",
          pageUrl:"/"
        },
        {
          title:"果汁",
          url:"./static/img/nav4.png",
          pageUrl:"/"
        },
        {
          title:"汉堡",
          url:"./static/img/nav5.png",
          pageUrl:"/"
        },
        {
          title:"蓝莓",
          url:"./static/img/nav6.png",
          pageUrl:"/"
        },
        {
          title:"柠檬",
          url:"./static/img/nav7.png",
          pageUrl:"/"
        },
        {
          title:"荔枝",
          url:"./static/img/nav8.png",
          pageUrl:"/"
        }
      ]
    }
  },
  methods: {},
  mounted: function () {

  }
}
</script>

<style scoped lang="less">
  /* 轮播 */
  .banner{
    width: 100%;
    height: 1.8rem;
    display: block;
    margin-bottom: 0.1rem;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 0.14rem;
    opacity: 0.75;
    line-height: 0.5rem;
    margin: 0;
  }

  /* 导航栏 */
  .header_nav{

    ul{
      overflow: hidden;
      .h_li {
        width: 25%;
        box-sizing: border-box;
        border-left: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        color: #fff;

        a{
          display: block;
        }
        .h_nav_pic{
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          margin: 0.03rem auto;
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        p{
          text-align: center;
          font-size: 0.12rem;
        }
      }
      .lb_0{
        border-left: 0;
      }
    }
  }

</style>
