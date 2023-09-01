<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 12:18:46
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 14:17:46
 * @Description: Please write the description of this file.
-->
<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="dialogTitle"
    width="30%"
    @close="handleClose"
  >
    <el-form ref="formRef" label-width="6rem" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password" type="password" show-password>
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="form.mobile" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleComfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmits, ref, defineProps } from 'vue'
import { addUser } from '@/api/user'
import i18n from '@/i18n'
import { ElMessage } from 'element-plus'

defineProps({
  dialogTitle: {
    type: String,
    default: '',
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const handleClose = () => {
  emits('update:modelValue', false)
}

const handleComfirm = async () => {
  await addUser(form.value)
  ElMessage({
    message: i18n.global.t('message.updateSuccess'),
    type: 'success'
  })
  handleClose()
}

const formRef = ref(null)

const form = ref({
  username: '',
  password: '',
  email: '',
  mobile: ''
})

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
  ],
  email: [
    {
      required: true,
      message: '请输入邮箱！',
      trigger: ['change', 'blur']
    }
  ],
  mobile: [
    {
      required: true,
      message: '请输入手机号！',
      trigger: 'blur'
    }
  ]
})
</script>

<style lang="scss" scoped></style>
