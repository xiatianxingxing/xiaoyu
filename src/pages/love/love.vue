<template>
    <div class="dong">
      <div class="header_nav">
        <ul>
          <li class="h_li fl" v-for="(nav,index) in  nav_mes" :class="index%4 == 0? 'lb_0':''">
            <a href="javascript:;">
              <i class="h_nav_pic">
                <img :src="nav.url" alt="">
              </i>
              <p>{{nav.title}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        nav_mes:[
          {
            title:"爆米花",
            url:"./static/img/nav1.png"
          },
          {
            title:"蛋糕",
            url:"./static/img/nav2.png"
          },
          {
            title:"果冻",
            url:"./static/img/nav3.png"
          },
          {
            title:"果汁",
            url:"./static/img/nav4.png"
          },
          {
            title:"汉堡",
            url:"./static/img/nav5.png"
          },
          {
            title:"蓝莓",
            url:"./static/img/nav6.png"
          },
          {
            title:"柠檬",
            url:"./static/img/nav7.png"
          },
          {
            title:"荔枝",
            url:"./static/img/nav8.png"
          }
        ]
      }
    },
    methods: {},
    mounted () {

    }
  }
</script>

<style scoped lang="less">
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
