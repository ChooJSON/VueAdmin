<template>
  <div class="login-page">
    <div class="login-container">
      <div class="title-container">
        <h3 class="login-title">{{ $t('login.title') }}</h3>
      </div>
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名/Username"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码/Password"
            show-password
          />
        </el-form-item>
      </el-form>
      <div class="button-container">
        <el-button
          type="primary"
          class="login-button"
          round
          @click="submitLogin"
        >{{ $t('login.btnTitle') }}</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const form = ref({
  username: 'admin',
  password: '123456'
})

// 表单校验规则
const rules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名！',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！',
      trigger: 'blur'
    }
  ]
})

// 登录验证
const formRef = ref(null)
const submitLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('app/login', form.value)
    } else {
      return false
    }
  })
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
.login-page {
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
.login-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 1rem;
  border-radius: 1.5rem;
  border: .05rem solid #d5d7da;
  .title-container {
    font-weight: bolder;
    margin-bottom: 2rem;
    .login-title {
      color: #409eff;
    }
  }
  .el-input {
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin: .25rem 0;
  }
  .button-container {
    margin-top: 1rem;
  }
}
.login-container:hover {
  border-color: #409eff;
}
</style>
