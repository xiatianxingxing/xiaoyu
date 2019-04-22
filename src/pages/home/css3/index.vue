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
          <a name="a1">新增加的属性选择器</a>
          <div class="text_con">
            <p>E[attr]  查找指定拥有attr属性的E标签</p>
            <p>E[attr=value] 查找指定拥有attr属性的值是value的E标签 。</p>
            <p>E[attr*=value] 属性值包含value ,在任何位置都可以</p>
            <p>E[attr^ = value]  以value值开头的E标签 </p>
            <p>E[attr$ = value] 以value结尾的E标签</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a2">伪类选择器</a>
          <div class="text_con">
            <p>E：first-child   相对于父级的第一个E元素（last最后一个）（如果第一个不是E，那就取不到）</p>
            <p>E：first/last-of-type  相对于父级的满足条件的第一个E元素（last最后一个）</p>
            <p>E：nth-of-type(n)  满足条件的低n个元素， n从1开始，默认子元素的长度</p>
            <p>E:nth-of –type(-n+5)  取前5个满足条件的E元素，</p>
            <p>E：nth-last-of-type(-n+5)   取后5个满足条件的E元素</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a3">伪元素选择器</a>
          <div class="text_con">
            <p>E::before  E::after  记住加 content “”，不能被JS调用</p>
            <p>E::first-letter  选择第一个字或字母 ，可以实现首字下沉</p>
            <p>E::first-line    选择第一行 </p>
            <p>E::selection    设置 当前选中的样式，不能设置大小</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a4">文字阴影</a>
          <div class="text_con">
            <p>text-shadow:x(x坐标)   y（y坐标）    blur（模糊程度）   color</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a5">边框圆角和边框阴影</a>
          <div class="text_con">
            <p>Bor-radius:      像素和百分比都可以  当 x y 为0时  ，四周都有阴影</p>
            <p>Box-shadow ：x(水平方向)   y (垂直方向)   blur   spaend   color  inset</p>
            <p> Blur: 模糊度 （可选）</p>
            <p> Spaend  :阴影的尺寸（可选）</p>
            <p> Inset:内阴影（可选）</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a6">渐变</a>
          <div class="text_con">
            <p>线性渐变
              ‘background:linear-gradient(角度 ，颜色1  10%，…)</p>
            <p>径向渐变
              ‘background:radial-gradient(形状  大小  at （坐标）   ，颜色)</p>
            <p>形状：circle 正方形      ellipse适配当前的形状</p>
            <p>大小 ： closest-corner 最近的角;;;   farthest-corner  最远的角;;;   Closest-side  最近的边;;;      farthest-side   最远的边</p>
            <p>坐标 at   x y  （或  center  center）	圆心位置;</p>
            <p>颜色	  red  10%(可以不写，也可以写两个)</p>
            <p>在 linear-gradient和 radial-gradient前面加repeating-linear-greadient:.. 是重复渐变</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a7">过度</a>
          <div class="text_con">
              <p>transition-property  :过度效果的样式名称   left</p>
              <p>transition-duration: 过度用时  2s</p>
              <p>transition-timing-function: linear  匀速   ease 平滑    ease-in先快后曼</p>
              <p>transition-delay:    过度效果的延迟   5s</p>
              <p>transition: 属性名   过度时间    速度       延迟</p>
              <p>transition: all(所有样式)    steps(n) 分几次完成</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a8">2D</a>
          <div class="text_con">
              <p>transform:translate() 移动坐标</p>
              <p>transform:scale() 缩放 大小   默认1；大于1放大，小于1大于0  缩小</p>
              <p>transform:rotate(90deg)  旋转角度</p>
              <p>transform:skew(x,y)  斜切角度  改变形状  </p>
              <p>transform-origin:设置旋转轴心、left  top</p>
              <p>transform:none 清除</p>
              <p style="color:red">不能同时写两个以上的transfor，不然后面的会覆盖的 也可以连写没有顺序之分</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a9">3D</a>
          <div class="text_con">
              <p>transform:translate3d( X,Y,Z) 移动坐标</p>
              <p>transform:rotate3d(X,Y,Z,n deg)  旋转角度  单独旋转一个轴rotateX(40deg)</p>
              <p>transform-style:preserve-3d;  保留3d效果</p>
              <p>perspective:    透视效果</p>
              <p>perspective-origin:  设置透视角度</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a10">设置伸缩display: flax</a>
          <div class="text_con">
              <p>transform:translate3d( X,Y,Z) 移动坐标</p>
              <p>transform:rotate3d(X,Y,Z,n deg)  旋转角度  单独旋转一个轴rotateX(40deg)</p>
              <p>transform-style:preserve-3d;  保留3d效果</p>
              <p>perspective:    透视效果</p>
              <p>perspective-origin:  设置透视角度</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a10">设置伸缩display: flax</a>
          <div class="text_con">
            <p>‘justify-content :flax-start      让子元素从头开始排列</p>
            <p>                 :flax-end        让子元素从尾开始排列</p>
            <p>                 ：center         居中</p>
            <p>                 ：space-between  左右对齐 盒子之间距离相等</p>
            <p>                 ： space-around   盒子之间距离相等  两边有空隙</p>
            <p>‘flex-wrap : wrap     换行  （wrap-reverse  反转）</p>
            <p>              ：nawrap   不换行</p>
            <p>flex-direction: row  (主轴)   column（侧轴）</p>
            <p>flex-flow:row    wrap     从左到右；</p>
            <p>flex-grow: N  可以扩展的宽度比例   默认为0（父>子）；</p>
            <p>flex-shrink :N 定义收缩比例（子 >父）</p>
            <p>flex:  设置收缩比例 1     2</p>
            <p>align-items:设置子元素的对齐方式  flex-start /flex-end/center</p>
            <p>align-self: 设置当前元素的位子flex-start /flex-end/center</p>

          </div>
        </div>

        <div class="sf_area">
          <a name="a11">Column 的多列布局</a>
          <div class="text_con">
              <p>colunm-count: 列数</p>
              <p>column-rule :线的样式</p>
              <p>column-gap:  内容列之间的距离</p>
              <p>column-width :列的宽;和 column-count有冲突，取大优先</p>
              <p>column-span :独占一行  （一般标题使用）</p>
          </div>
        </div>

        <div class="sf_area">
          <a name="a12">动画</a>
          <div class="text_con">
              <p>@keyframes   a {0%{}  50%{} 100%{}  } 创建动画</p>
              <p>animation-name : 添加动画</p>
              <p>animation-duration: 动画用时</p>
              <p>animation-iteration-count:动画次数      infinite(无止境)</p>
              <p>animation-delay: 动画延迟时间</p>
              <p>animation-fill-mode（方式）: forwards(向前) 保留动画结束的状态，不会立刻进入初始状态     </p>
              <p>                           ：backwards(向后)，立刻进入初始状态</p>
              <p>animation-timing-function: 设置速度  linear     ease-in</p>
              <p>animation-play-state: running 播放   paused 暂停</p>
            
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
        title:"css3",
        isshow: false,
        rightNav:[
          {name:"新增加的属性选择器",pId:"a1"},
          {name:"伪类选择器",pId:"a2"},
          {name:"伪元素选择器",pId:"a3"},
          {name:"文字阴影",pId:"a4"},
          {name:"边框圆角和边框阴影",pId:"a5"},
          {name:"渐变",pId:"a6"},
          {name:"过度",pId:"a7"},
          {name:"2D",pId:"a8"},
          {name:"3D",pId:"a9"},
          {name:"设置伸缩",pId:"a10"},
          {name:"Column 的多列布局",pId:"a11"},
          {name:"动画",pId:"a12"},
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
    .text_con{
      color: #333;
      font-size: 0.14rem;
      p{
        margin-top: 0.1rem;
      }
    }
  }


</style>
