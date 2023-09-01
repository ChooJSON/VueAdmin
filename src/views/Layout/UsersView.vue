<!--
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 04:34:29
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 14:53:25
 * @Description: Please write the description of this file.
-->
<template>
  <el-card class="box-card">
    <el-row :gutter="20" class="tableNav">
      <el-col :span="7">
        <el-input
          :placeholder="$t('table.placeholder')"
          clearable
          v-model="queryForm.query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initGetUserList">{{
        $t('table.search')
      }}</el-button>
      <el-button type="primary" @click="handleDialogValue()">{{
        $t('table.adduser')
      }}</el-button>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        :width="item.width"
        :prop="item.prop"
        :label="$t(`table.${item.label}`)"
        v-for="(item, index) in options"
        :key="index"
      >
        <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state" @change="changeState(row)" />
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">
          {{ $filters.filterTime(row.create_time) }}
        </template>
        <template #default v-else-if="item.prop === 'action'">
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="warning" :icon="Setting" circle />
          <el-button type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      :page-sizes="[2, 5, 10, 15]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      class="pagination"
    >
    </el-pagination>
  </el-card>
  <AddDialog
    v-model="dialogVisible"
    :dialogTitle="dialogTitle"
    v-if="dialogVisible"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getUser, changeUserState } from '@/api/user'
import { options } from './users/options'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import AddDialog from '@/components/users/AddDialog.vue'

const i18n = useI18n()
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 5
})

const total = ref(0)
const tableData = ref([])

const dialogVisible = ref(false)
const dialogTitle = ref('')

const initGetUserList = async () => {
  const res = await getUser(queryForm.value)
  console.log(res.users)
  total.value = res.total
  tableData.value = res.users
}
initGetUserList()

const changeState = async (info) => {
  console.log(info)
  await changeUserState(info.id, info.mg_state)
  ElMessage({
    message: i18n.t('message.updateSuccess'),
    type: 'success'
  })
  console.log(info)
}

const handleSizeChange = (pagesize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pagesize
  initGetUserList()
}

const handleCurrentChange = (pagenum) => {
  queryForm.value.pagenum = pagenum
  initGetUserList()
}

const handleDialogValue = () => {
  dialogTitle.value = '添加用户'
  dialogVisible.value = true
}
</script>

<style lang="scss">
.tableNav {
  margin-bottom: 2rem;
}
.pagination {
  margin-top: 2rem;
}
</style>
