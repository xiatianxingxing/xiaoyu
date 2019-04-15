<template>
    <div class="dong">
      <mt-header :title="title">
        <router-link to="/my" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
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
    methods: {},
    mounted () {

    }
  }
</script>

<style scoped>

</style>
