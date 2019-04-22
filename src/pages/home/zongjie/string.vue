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
          <a name="a1">split</a>
          <div>
            <p>str.split("")  以“” 里的字符分隔，返回一个数组</p>
            <pre class="pre_code">
                <code>
  var str1 = "abcdefg";
  console.log(str1.split(""));
  //  ["a", "b", "c", "d", "e", "f", "g"]
                </code>
              </pre>
          </div>
        </div>
        <div class="sf_area">
          <a name="a2">substr</a>
          <div>
            <p>str.substr(a，b) 从下标为a的开始，截取b个  返回一个string </p>
            <pre class="pre_code">
                <code>
  var str2 = "123456789";
  console.log(str2.substr(2,5)); // 34567
  console.log(str2.substr(-4,3));
  // 678 负数 从最后一个开始，从-1 开始
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a3">substring</a>
          <div>
            <p>str.substring(a,b) 从下标a截取都下标b</p>
            <pre class="pre_code">
                <code>
  var str3 = "abcdefg";
  console.log(str3.substring(1, 3));  // bc
  console.log(str3.substring(1));  // bcdefg
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a4">replace</a>
          <div>
            <p>str.replace(a,b)  替换  b替换a的值</p>
            <pre class="pre_code">
                <code>
  var str4 = "红的蓝的绿的粉的紫的黄的青的";
  console.log(str4.replace("的", "色"));
  // 红色蓝的绿的粉的紫的黄的青的
  console.log(str4.replace(/的/g ,"色"));
  // 红色蓝色绿色粉色紫色黄色青色    替换所有
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a5">charAt</a>
          <div>
            <p>str.charAt(a)  返回索引为a的字符</p>
            <pre class="pre_code">
                <code>
  var str5 = "我明白在你的怀里，不一定在你的心里";
  console.log(str5.charAt(5)); // 的
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a6">slice</a>
          <div>
            <p>str.slice(a,b) 截取a到b（不包括，可为负值）</p>
            <pre class="pre_code">
                <code>
  var str6 = "abcdefg";
  console.log(str6.slice(2, 4)); // cd
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a7">search</a>
          <div>
            <p>str.search(/a/)  正则匹配, 返回第一个索引，没有则返回-1，如果是字符串会制动转化为正则</p>
            <pre class="pre_code">
                <code>
  var str7 = "为什么没有人给我打?电话";  // 符号要用 \?转义
  console.log(str7.search(/\?/)); // 3
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a8">match</a>
          <div>
            <p>str.match(/a/)  正则匹配，返回一份数组</p>
            <pre class="pre_code">
                <code>
  var str7 = "为什么没有人给我打?电话";
  console.log(str7.match(/没有/));
  // ["没有", index: 3, input: "为什么没有人给我打电话", groups: undefined]
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
        title:"字符串方法",
        isshow: false,
        rightNav:[
          {name:"split",pId:"a1"},
          {name:"substr",pId:"a2"},
          {name:"substring",pId:"a3"},
          {name:"replace",pId:"a4"},
          {name:"charAt",pId:"a5"},
          {name:"slice",pId:"a6"},
          {name:"search",pId:"a7"},
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
