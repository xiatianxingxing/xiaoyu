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
          <a name="a1">concat</a>
          <div>
            <p>arr.concat  合并，返回一个数组</p>
            <pre class="pre_code">
                <code>
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    var arr2 = ["a", "b", "c", "d", "f", "g"];
    var arr1_arr2 = arr1.concat(arr2);
    console.log(arr1_arr2);
    // [1, 2, 3, 4, 5, 6, 7, 8, "a", "b", "c", "d", "f", "g"]
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a2">slice</a>
          <div>
            <p>arr.slice(a,b) 截取下标从a到b（不包括b），返回一个数组</p>
            <pre class="pre_code">
                <code>
  var arr3 = [1, 2, 3, 4, 5, 6, 7];
  var Arr3 = arr3.slice(2, 5);
  console.log(arr3);  // [1, 2, 3, 4, 5, 6, 7]
  console.log(Arr3);  // [3, 4, 5]
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a3">splice</a>
          <div>
            <p>arr.splice(a,b) 从下标a开始，截取b个 ，返回一个数组 ，后面也可以跟数据，可以替换</p>
            <pre class="pre_code">
                <code>
  var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var Arr4 = arr4.splice(2, 5);
  console.log(arr4); // [1, 2, 8, 9]
  console.log(Arr4); //[3, 4, 5, 6, 7]
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a4">sort</a>
          <div>
            <p>arr.sort()  从新排序，从小到大，字母也是</p>
            <pre class="pre_code">
                <code>
  var arr5 = [5, 4, 3, 2, 1, 0];
  var arr6 = ["g", "f", "e", "d", "c", "b", "a"];
  arr5.sort();
  arr6.sort();
  console.log(arr5); // [0, 1, 2, 3, 4, 5]
  console.log(arr6); // ["a", "b", "c", "d", "e", "f", "g"]
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a5">join</a>
          <div>
            <p>arr.join("") 返回一个string  ， 并用“”中东西的链接，也可以为空</p>
            <pre class="pre_code">
                <code>
  var arr7 = [1, 2, 3, 4, 5, 6];
  arr7 = arr7.join("-");  // 1-2-3-4-5-6
  console.log(arr7);
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a6">indexOf</a>
          <div>
            <p>arr.indexOf()  查看arr中是否与（）里的东西全等 ，没有为-1  有的话，输出当前索引</p>
            <pre class="pre_code">
                <code>
  var arr8 = ["1", 2, 4, 5, 8, "8", 4];
  console.log(arr8.indexOf("8")); // 5
  console.log(arr8.indexOf(8));   // 4
  console.log(arr8.indexOf(4));  // 2 输出第一个位置
  console.log(arr8.indexOf(3));  // -1
                </code>
              </pre>
          </div>
        </div>

        <div class="sf_area">
          <a name="a7">shift，pop，push，unshift</a>
          <div>
            <pre class="pre_code">
                <code>
  var arr9 = [0, 1, 2, 3, 4, 5];
  console.log(arr9.pop());
  // 5 去除最后一个，返回一个去除的值， 此时 arr9 = [0,1,2,3,4]

  console.log(arr9.shift());
  // 0 去除第一个，返回一个去除的值， 此时 arr9 = [1,2,3,4]

  console.log(arr9.push("a"));
  // 5  返回一个数组的长度  此时arr9 =  [1, 2, 3, 4, "a"]

  console.log(arr9.unshift("123"));
  // 6 返回数组的长度  此时的 arr9 =  ["123",1, 2, 3, 4, "a"]
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
          {name:"concat",pId:"a1"},
          {name:"slice",pId:"a2"},
          {name:"splice",pId:"a3"},
          {name:"sort",pId:"a4"},
          {name:"join",pId:"a5"},
          {name:"indexOf",pId:"a6"},
          {name:"shift，pop，push，unshift",pId:"a7"},
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
