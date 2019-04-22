<template>
    <div class="">
      <header-top :title="title" v-on:headerBtn="headerRight()"></header-top>

      <main class="dong_body">
        <!-- 左侧导航 -->
        <div>
          <div class="menu_list">
            <el-collapse-transition>
              <div v-show="isshow">
                <ul class="menu_uu">
                  <li v-for="(item,index) in rightNav" class="right_li">
                    <a :href="'#'+item.pId">
                      {{item.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </el-collapse-transition>
          </div>
        </div>
        <!-- 主体内容 -->
        <div>
          <div class="sf_area">
            <a name="a1">数组去重</a>
            <div>
              <h4>方法1</h4>
              <pre class="pre_code">
                <code>
                  var b =[];
                    for(var i=0;i<a.length;i++){
                      if(b.indexOf(a[i]) == -1){
                        b.push(a[i])
                      }
                    }
                </code>
              </pre>
            </div>
            <div>
              <h4>方法2</h4>
              <pre class="pre_code">
                <code>
                  var b = [];
                  var c = {};
                  for(var i=0;i<a.length;i++){
                      //判断c对象有没有这个键  有为true  没有为false
                      //若没有 取反  为b[]添加数据
                      if(!c[a[i]]){
                          b.push(a[i]);
                          //再把c[a[i]这个键设为true  因为上面要取反
                          c[a[i]] = true
                      }
                  }
                  console.log(b);
                </code>
              </pre>
            </div>
            <div>
              <h4>方法3</h4>
              <pre class="pre_code">
                <code>
                  //先排列数组 从大到小
                  var a1 = a.sort();
                  console.log(a1);
                  // 把a1的第一个 值 付给b数组
                  var b = [a1[0]];
                  for(var i=0;i<a1.length;i++){
                      //判断 b里面有没有这个值  以为是从小到大排序，所以不要担心漏掉一个
                      if(a1[i] !== b[b.length-1]){
                          b.push(a1[i])
                      }
                  }
                  console.log(b);
                </code>
              </pre>
            </div>
          </div>
          <div class="sf_area">
            <a name="a2">url处理</a>
            <div>
              <h4>方法1</h4>
              <pre class="pre_code">
                <code>
                  let urlSar = url.split("?")[1]
                  let urlArr = urlSar.split("&");
                  let urlObj = {};
                  for(let i = 0;  i< urlArr.length; i++){
                      let u = urlArr[i].split("=");
                      urlObj[u[0]] = u[1];
                  }
                  console.log(urlObj);
                </code>
              </pre>
            </div>

          </div>
        </div>
      </main>

    </div>
</template>
<script>
  import headerTop from "@/components/header.vue";

  export default {
    name: 'suanfa',
    data () {
      return {
        title:"一些简单算法",
        isshow: false,
        rightNav:[
          {name:"数组去重",pId:"a1"},
          {name:"乱序排序法",pId:"a2"},
        ]
      }
    },
    methods: {
      headerRight(input){
        this.isshow = !this.isshow
      }
    },
    mounted () {

    },
    components:{
      headerTop
    }
  }
</script>

<style scoped lang="less">
  @bgcColor: rgba(255,255,255,0.6);
  @codeBgc: rgba(0,0,0,0.5);
  /* 左侧导航 */
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .menu_list{
    width: 2rem;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 40px;
    overflow-y: auto;
    .right_li{
      margin: 2px 0;
      padding: 0 0.05rem;
      background-color: rgba(0,0,0,0.5);
      line-height: 0.36rem;
      a{
        color: #fff;
      }
    }
  }
  .sf_main{
    padding: 0.1rem;
    padding-top: 44px;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    position: relative;
    box-sizing: border-box;
  }
  .pre_code{
    overflow: auto;
    font-size: 0.12rem;
  }
  .sf_area{
    background-color: @bgcColor;
    padding: 0.1rem;
    margin-bottom: 0.2rem;
    border-radius: 5px;
    pre{
      background-color: @codeBgc;
      color: #fff;
      border-radius: 5px;
    }
  }


</style>
