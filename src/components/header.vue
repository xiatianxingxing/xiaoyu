<template>
    <div class="dong">
      <mt-header :title="title" class="header">
        <a href="javascript:history.back()" slot="left">
          <mt-button icon="back"></mt-button>
        </a>
        <mt-button icon="more" slot="right" @click="headerRbtn()"></mt-button>
      </mt-header>
    </div>
</template>
<script>
  export default {
    props:['title'],
    name: '',
    data () {
      return {}
    },
    methods: {
      headerRbtn(){

        this.$emit("headerBtn",'')
      }
    },
    mounted () {

    }
  }
</script>

<style scoped>
  .header{
    background-color: rgba(255,255,255,0.5);
    color: #333;
    box-shadow: 1px 0px 2px #dedede;
    z-index: 9999;
    width: 100%;
    position: fixed;
    top: 0;
  }
</style>
