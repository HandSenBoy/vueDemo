<template>
  <div class="contanor">
    <div class="menu">
      <Menus :menuData="menuData"></Menus>
    </div>
    <div class="main">
      <div v-for="todo in todos">{{todo.text}}</div>
    </div>
  </div>
</template>

<script>
  import Menus from '../../component/Menu.vue'
  export default {
      name: 'home',
      data() {
        return {
          menuData: [{key: '/home', name: '导航一'},{key: '/login', name: '导航二'}],
           todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
          ]
        }
      },
      components: {
        Menus
      },
      create() {

      }
  }
</script>

<style>
    .contanor{
        width: 100%;
        height: 100%;
        background: grey;
    }
    .menu {
        float: left;
        width: 20%;
        height: 100%;
    }
    .main {
        float: right;
        width: 80%;
        height: 100%;
        background: #afd7ef;
    }

</style>