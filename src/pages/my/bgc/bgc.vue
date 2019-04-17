<template>
    <div>
      <header-top :title="title"></header-top>
      <div class="dong_body">
        <el-col :span="8" class="bgc_list" v-for="(item,index) in bgcUrl" :key="index">
          <div class="list_box img"
               @click="changeBgc(item)"
               :style="{'backgroundImage':'url('+item+')'}">
          </div>
        </el-col>
        <el-col :span="8" class="bgc_list" >
          <div class="list_box el-icon-plus" style="font-size: 50px;line-height: 160px;color: #999;"
               @click="dialogVisible2 = true"
               >

          </div>
        </el-col>
      </div>
      <!-- 弹框 -->
      <el-dialog
        title="背景"
        :visible.sync="dialogVisible"
        width="80%">
        <span>确认修改？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 自定义弹框 -->
      <el-dialog
        title="自定义背景"
        :visible.sync="dialogVisible2"
        width="80%">
        <div>
          <el-color-picker
            v-model="color"
            size="mini"
            @change="selectColor"
            :predefine="predefineColors">
          </el-color-picker>
          <el-row :gutter="6">
            <el-col :span="12" class="" >
              <el-row style="min-height: 10px">
                <el-col :span="12" class="" v-for="(color,index) in seleColor" :key="index">
                  <div class="color_box" :style="{backgroundColor: color}">
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12" class="" >
              <p style="text-align: center" @click="showView">展  示</p>
              <div class="colorShow" ref="colorShow" style="background-color: red;">
              </div>
            </el-col>

          </el-row>

        </div>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" class="btn_style" @click="removeColor()">取 消</el-button>
          <el-button size="mini" class="btn_style" type="primary" @click="zidingyi">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script>
  import headerTop from "@/components/header.vue";

  export default {
    name: '',
    data () {
      return {
        title:"背景",
        bgcUrl:[
          'static/img/1.jpg',
          'static/img/2.jpg',
          'static/img/3.jpg',
          'static/img/4.jpg',
          'static/img/5.jpg',
        ],
        selectUrl:"",
        dialogVisible : false,
        dialogVisible2 : false,
        color: 'rgba(255, 69, 0, 0.68)', // 默认颜色
        predefineColors: [    // 默认供选择的颜色
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        seleColor:[],   //  选择好的颜色
      }
    },
    methods: {
      changeBgc(val){
        this.dialogVisible = true
        this.selectUrl = val;

      },
      // 选择图片确认提交
      confirm(){
        this.dialogVisible = false;
        this.$store.commit("changeUrl",this.selectUrl)
      },
      // 选择颜色
      selectColor(val){
        console.log(13)
        if(this.seleColor.length == 6){
          this.$message({
            message: '最多选择6条',
            type: 'warning'
          });
          return
        }else{
          this.seleColor.push(val)
        }

      },
      // 确认提交
      zidingyi(){

      },
      // 去掉颜色
      removeColor(){
        this.dialogVisible2 = false
        this.seleColor = []
      },
      showView () {
        // background: linear-gradient(0deg , #ccc 0% , #fff 100%)
        var _this = this;
        var index = _this.seleColor.length;
        var color = _this.seleColor;
        if(index == 1){
          this.$refs.colorShow.style.background = color[0]
        }
        else if(index == 2){
          var color1 = color[0] + " 0%";
          var color2 = color[1] + " 100%";
          this.$refs.colorShow.style.background = 'linear-gradient(30deg , '+color1+' , '+color2+')'
        }
        else if(index == 3){
          var color1 = color[0] + " 0%";
          var color2 = color[1] + " 50%";
          var color3 = color[2] + " 100%";
          this.$refs.colorShow.style.background = 'linear-gradient(30deg , '+color1+' , '+color2+','+color3+')'
        }
        else if(index == 4){
          var color1 = color[0] + " 0%";
          var color2 = color[1] + " 33%";
          var color3 = color[2] + " 66%";
          var color4 = color[3] + " 100%";
          this.$refs.colorShow.style.background = 'linear-gradient(30deg , '+color1+' , '+color2+','+color3+','+color4+')'
        }
        else if(index == 5){
          var color1 = color[0] + " 0%";
          var color2 = color[1] + " 25%";
          var color3 = color[2] + " 50%";
          var color4 = color[3] + " 75%";
          var color5 = color[4] + " 100%";
          this.$refs.colorShow.style.background = 'linear-gradient(30deg , '+color1+' , '+color2+','+color3+','+color4+','+color5+')'
        }
        else if(index == 6){
          var color1 = color[0] + " 0%";
          var color2 = color[1] + " 20%";
          var color3 = color[2] + " 40%";
          var color4 = color[3] + " 60%";
          var color5 = color[4] + " 80%";
          var color6 = color[5] + " 100%";
          this.$refs.colorShow.style.background = 'linear-gradient(30deg , '+color1+' , '+color2+','+color3+','+color4+','+color5+','+color6+')'
        }

      }
    },
    mounted () {

    },
    components:{
      headerTop
    }
  }
</script>

<style  lang="less" scoped>
  .bgc_list{
    padding: 5px;
    text-align: center;

    .list_box{
      width: 100%;
      height: 160px;
      display: inline-block;
      background-color: #fff;
      box-shadow: 1px 1px  2px #dedede;
      box-sizing: border-box;
    }
  }
  .colorShow{
    width: 1rem;
    height: 1.8rem;
  }
  .color_box{
    width: 0.3rem;
    height: 0.3rem;
    margin-top: 0.3rem;
    border-radius: 50%;
    border:1px solid #fff;
  }
</style>
