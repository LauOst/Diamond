<template>
  <div class="login-container flex-box flex_j_c-center flex_a_i-center">
    <div class="login-box">
      <div class="login-left"></div>
      <transition name="login" mode="out-in">
        <div v-if="openedLogin" class="login-form">
          <div class="login-logo">
            <h2 class="logo-text">Note-Book</h2>
          </div>
          <LoginForm />
        </div>
        <div v-else class="login-form">
          <div class="login-logo">
            <h2 class="logo-text">Note-Book</h2>
          </div>
          <DepartForm />
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from './components/LoginForm.vue'
import DepartForm from './components/DepartForm.vue'
import { UserStore } from '@/store/modules/user'

const userStore = UserStore()

const openedLogin = computed(() => userStore.openedLogin)

/* 监听弹出站点框 */
// Function
watch(
  () => openedLogin.value,
  (val) => {
    if (val) {
      userStore.resetToken()
    }
  },
)
window.addEventListener('beforeunload', () => {
  userStore.SET_OPENEDLOGIN(true)
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
