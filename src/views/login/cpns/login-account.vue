<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'

import { rules } from '../config/account.config'

import localCache from '@/utils/cache'
import store from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const ruleForm = ref<InstanceType<typeof ElForm>>()

    const accountLogin = (isKeepPassword: boolean) => {
      // console.log('accountLogin')
      ruleForm.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.saveCache('name', account.name)
            localCache.saveCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 进行登陆验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      ruleForm,
      accountLogin
    }
  }
})
</script>

<style scoped></style>
