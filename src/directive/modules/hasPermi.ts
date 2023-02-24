import { UserStore } from '@/store/modules/user'

export default {
  mounted(el: Element, binding: any) {
    const userStore = UserStore()
    const { value } = binding
    const allPermission = '*:*:*'
    const { permissions } = userStore
    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value

      const hasPermissions = permissions.some((permission) => {
        return allPermission === permission || permissionFlag.includes(permission)
      })

      if (!hasPermissions) {
        // eslint-disable-next-line no-unused-expressions
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`请设置操作权限标签值`)
    }
  },
}
