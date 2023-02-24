/**
 * @Description: 角色管理模块
 * @Date: 2023/1/31 11:58 AM
 */
import http from '@/api'
import { ResPage } from '@/typings/api/ResResult'
import { Role } from '@/typings/api/modules/role'

// * 获取角色列表
export const getRoleList = (params: Role.ReqRoleParams) => {
  return http.get<ResPage<Role.ResRoleList>>(`/api/user/role`, params)
}

// * 新增角色
export const addRole = (params: any) => {
  return http.post(`/api/user/role`, params)
}

// * 编辑角色
export const editRole = (params: any) => {
  return http.put(`/api/user/update/role`, params)
}

// * 删除角色
export const delRole = (roleId: any) => {
  return http.delete(`/api/user/role/${roleId}`)
}

// * 切换角色状态
export const changeRoleStatus = (params: { roleId: string; status: number }) => {
  return http.put(`/api/user/disable/enabled/role`, params)
}

// * 查询角色详细
export const getRoleDetail = (roleId: any) => {
  return http.get(`/api/user/role/${roleId}`)
}
