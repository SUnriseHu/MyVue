<template>
<div id="app">
  <form :inline="true" :model="formData">
    <input type="text" v-model="formData.name" name="username" placeholder="请输入用户名" required />
    <input type="password" v-model="formData.password" name="password" placeholder="请输入密码" required />
    <input type="button" @click="pageRequest" value="登录" />
  </form>
  <!-- <p>ceshi xianshi </p> -->
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      formData: {}
    }
  },
  methods: {
    pageRequest() {
      $http.post('http://localhost:8080/', $qs.stringify(JSON.parse(JSON.stringify(this.formData))))
    }
  },
  create() {
    //测试网络请求
    // $http.post('/api/login/auth')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
