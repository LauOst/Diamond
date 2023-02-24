import { getToken, getSub, getCode, setToken, setSub, setCode, removeToken, removeSub, removeCode } from '@/utils/auth'
import { UserState } from '@/typings/store/user'
import { Login } from '@/typings/api/modules/login'
import { getInfoApi, loginApi, logoutApi } from '@/api/modules/login'
import { resetRouter } from '@/router'

export const UserStore = defineStore({
  id: 'UserState',
  state: (): UserState => ({
    // token
    token: getToken() || '',
    sub: getSub() || '',
    code: getCode() || '',
    roles: [],
    permissions: [],
    openedLogin: true,
    departOptions: [],
  }),
  actions: {
    SET_TOKEN_Sub(info: any) {
      this.token = info.access_token
      this.sub = info.sub
      this.code = info.code
    },
    SET_DEPART(info: any) {
      this.departOptions = info.departs
    },
    SET_OPENEDLOGIN(info: any) {
      this.openedLogin = info
    },
    RESET_STATE() {
      this.$reset()
    },

    // 登录
    async login(userInfo: Login.ReqLoginForm) {
      const { username, password } = userInfo
      const response = await loginApi({ username: username.trim(), password })
      if (response) {
        const { userTokenMsg } = response.data
        this.SET_TOKEN_Sub(userTokenMsg)
        this.SET_DEPART(response.data)
        setToken(userTokenMsg.access_token)
        setSub(userTokenMsg.sub)
        setCode(userTokenMsg.code)
      }
      return response
    },
    // 获取用户信息
    async getInfo() {
      const { data } = await getInfoApi()
      const { roles, permissions } = data
      this.roles = roles
      this.permissions = permissions
      return data
    },

    // 注销
    async logout() {
      const response = await logoutApi()
      if (response) {
        removeToken()
        removeSub()
        removeCode()
        this.RESET_STATE()
        resetRouter()
      }
      return response
    },

    toggleLogin() {
      this.openedLogin = !this.openedLogin
    },

    // 清除 Token
    resetToken() {
      return new Promise((resolve) => {
        removeToken()
        removeSub()
        removeCode()
        this.RESET_STATE()
        resolve(null)
      })
    },
  },
})
