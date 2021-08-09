<template>
  <div class="login-pannel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="activeTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登陆</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 属性定义
    const isKeepPassword = ref<boolean>(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const activeTab = ref('account')

    // 方法定义
    const handleLoginClick = () => {
      if (activeTab.value === 'account') {
        accountRef.value?.accountLogin(isKeepPassword.value)
      } else {
        console.log('调用login-phone页面的方法')
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      activeTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-pannel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
