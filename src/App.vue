<template>
  <!-- <div>{{ $store.state.name }}</div>
  <router-link to="login">登陆</router-link>
  <router-link to="main">首页</router-link> -->
  <router-view></router-view>

  <!-- <el-button type="primary">哈哈哈</el-button>
  <el-button type="success">主要按钮</el-button> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'App',
  components: {
    // ElButton
  }
})
</script>

<style lang="less"></style>
