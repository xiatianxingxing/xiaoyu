<template>
  <div id="app" class="img" :style="{'backgroundImage':'url('+url+')'}">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      url:''
    }
  },
  beforeUpdate(){
    this.url = this.$store.state.xiaoyuUrl
  }
}
</script>

<style>

</style>
