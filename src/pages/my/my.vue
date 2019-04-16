<template>
    <div>
      <header class="my_header">
        <div class="my_photo img">

        </div>
        <p>小鱼儿</p>
      </header>
      <main class="my_main">
        <el-col :span='8' style="padding: 10px">
          <router-link to="/my/photo" class="my_list">
            <img class="img" src="~static/img/my_list2.png" alt="">
            <p>相册</p>
          </router-link>
        </el-col>
        <el-col :span='8' style="padding: 10px">
          <router-link to="/my/background" class="my_list">
            <img class="img" src="~static/img/my_list1.png" alt="">
            <p>背景</p>
          </router-link>
        </el-col>
      </main>

    </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {}
    },
    methods: {},
    mounted () {

    }
  }
</script>

<style scoped lang="less">
  @bgcColor: rgba(255,255,255,0.6);

  .my_header{
    padding: 0.1rem;
    background-color: @bgcColor;
    .my_photo{
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      border: 2px solid #dcc0ff;
      margin: 0 auto;
      background-image: url(/static/img/user.jpg);
    }
    p{
      text-align: center;
    }
  }

  .my_main{
    .my_list{
      background-color: @bgcColor;
      text-align: center;
      border-radius: 10px;
      display: block;
      img{
        width: 80px;
        height: 80px;
      }
    }

  }

</style>
