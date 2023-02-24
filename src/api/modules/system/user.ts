/**
 * @Description: 用户管理模块
 * @Date: 2023/1/31 11:58 AM
 */
import http from '@/api'
import { ResPage } from '@/typings/api/ResResult'
import { User } from '@/typings/api/modules/user'

// * 获取用户列表
export const getUserList = (params: any) => {
  return http.get<ResPage<User.ResUserList>>(`/api/user/account/user`, params)
}

// * 切换用户状态
export const changeUserStatus = (params: { id: string; status: number }) => {
  return http.put(`/api/user/account/disable/enabled/user`, params)
}

// * 新增用户
export const addUser = (params: any) => {
  return http.post(`/api/user/account/user`, params)
}

// * 编辑用户
export const editUser = (params: any) => {
  return http.put(`/api/user/account/user`, params)
}

// * 删除用户
export const delUser = (params: any) => {
  const { userId, username } = params
  return http.delete(`/api/user/role/${userId}/${username}`)
}

// * 获取角色信息
export const getRoleInfo = (params?: any) => {
  return http.get(`/api/user/account/role`, params)
}
