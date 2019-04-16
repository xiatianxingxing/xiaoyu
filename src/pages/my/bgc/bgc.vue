<template>
    <div>
      <header-top :title="title"></header-top>
      <div>
        <el-col :span="8" class="bgc_list" v-for="(item,index) in bgcUrl" :key="index">
          <div class="list_box img"
               @click="changeBgc(item)"
               :style="{'backgroundImage':'url('+item+')'}">

          </div>
        </el-col>
      </div>

      <!-- 弹框 -->
      <el-dialog
        title="背景"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="handleClose">
        <span>确认修改？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
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
        dialogVisible : false
      }
    },
    methods: {
      changeBgc(val){
        this.dialogVisible = true
        this.selectUrl = val;

      },
      confirm(){
        this.dialogVisible = false;
        this.$store.commit("changeUrl",this.selectUrl)
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
</style>
