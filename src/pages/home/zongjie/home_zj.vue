<template>
    <div>
      <header-top :title="title"></header-top>
      <main class="dong_body">
        <ul>
          <li class="zj_list" v-for="(mes,index) in dataMsg" :key="index">
            <router-link :to="mes.url" class="link_a">
              {{mes.name}}
            </router-link>
          </li>
        </ul>
      </main>
    </div>
</template>
<script>
  import headerTop from "@/components/header.vue"
  export default {
    name: '',
    data () {
      return {
        title:"总结",
        dataMsg:[
          {name:"简单算法和面试题",url:"/home/zongjie/suanfa"},
          {name:"字符串方法",url:"/home/zongjie/string"},
          {name:"数组的方法",url:"/home/zongjie/array"},
        ]
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
  @bgcColor: rgba(255,255,255,0.6);

  .zj_list{
    line-height: 0.4rem;
    font-size: 16px;
    margin: 0.05rem 0.1rem;
    border-radius: 5px;
    padding: 2px 0.1rem;
    background-color: @bgcColor;
    .link_a{
      display: block;
    }
  }

</style>
