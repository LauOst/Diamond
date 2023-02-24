<template>
  <el-form ref="departFormRef" :model="departForm" size="large" autocomplete="on">
    <el-form-item prop="username">
      <el-select v-model="departForm.id" placeholder="请选择" style="width: 360px">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
        <el-option v-for="item in departOptions" :key="item.id" :label="item.departName" :value="item.id" />
      </el-select>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button round size="large" @click="userStore.toggleLogin()">取消</el-button>
    <el-button round size="large" type="primary" @click="submitForm"> 登录 </el-button>
  </div>
</template>

<script lang="ts" setup>
/* 表单数据源 */
import { ElNotification } from 'element-plus'
import { LocationQuery } from 'vue-router'
import { getSiteListApi } from '@/api/modules/login'
import { getTimeState } from '@/utils/util'
import { UserStore } from '@/store/modules/user'

const userStore = UserStore()

const departForm = ref({}) // 站点表单

/* 站点列表 */
const departOptions = computed(() => userStore.departOptions)
/* 站点选择登录按钮方法 */
const otherQuery = ref({})
const redirect = ref('')
const router = useRouter()
const submitForm = () => {
  getSiteListApi(departForm.value)
    .then(() => {
      router.push({ path: redirect.value || '/', query: otherQuery.value })
    })
    .catch((error) => {
      console.log('error', error)
    })
  ElNotification({
    title: getTimeState(),
    message: '欢迎登录 Vite-Admin',
    type: 'success',
    duration: 3000,
  })
}

/* 处理otherQuery */
const route = useRoute()

const getOtherQuery = (query: LocationQuery) => {
  return Object.keys(query).reduce((acc, cur) => {
    if (cur !== 'redirect') {
      acc[cur] = query[cur]
    }
    return acc
  }, {} as LocationQuery)
}

watch(
  () => route.query,
  (query) => {
    if (query) {
      redirect.value = query.redirect?.toString() ?? ''
      otherQuery.value = getOtherQuery(query)
    }
  },
)
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>
