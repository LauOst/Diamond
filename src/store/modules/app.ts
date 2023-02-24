/**
 * @Description:
 * @Date: 2023/1/17 12:20 PM
 */
import Cookies from 'js-cookie'
// import { AppState, DeviceType } from '@/typings/store/appModel'

export const AppStore = defineStore({
  id: 'AppState',
  state: (): any => ({
    sidebar: {
      opened: Cookies.get('sidebarStatus') !== 'closed',
      withoutAnimation: false,
    },
    device: 0,
    size: Cookies.get('size') || 'medium',
  }),
  actions: {
    toggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened
      this.sidebar.withoutAnimation = false
      if (this.sidebar.opened) {
        Cookies.set('sidebarStatus', 'opened')
      } else {
        Cookies.set('sidebarStatus', 'closed')
      }
    },
  },
})
