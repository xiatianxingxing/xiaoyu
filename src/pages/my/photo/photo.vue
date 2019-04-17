<template>
    <div class="dong">
      <header-top :title="title"></header-top>
      <div class="dong_body">
        <el-col :span="6" class="photo_list" v-for="(item,index) in 12" :key="index">
          <div class="list_box">
            {{item}}
          </div>
        </el-col>
      </div>
    </div>

</template>
<script>

  import headerTop from "@/components/header.vue";

  export default {
    name: '',
    data () {
      return {
        title:"相册"
      }
    },
    methods: {},
    mounted () {

    },
    components:{
      headerTop,
    }
  }
</script>

<style scoped lang="less">

  .photo_list{
    padding: 5px;
    text-align: center;
    .list_box{
      width: 80px;
      height: 80px;
      display: inline-block;
      background-color: #fff;
      box-shadow: 1px 1px  2px #dedede;
      box-sizing: border-box;
    }

  }

</style>
