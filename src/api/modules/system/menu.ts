/**
 * @Description: 菜单模块
 * @Date: 2023/1/31 11:58 AM
 */
import http from '@/api'
import { ResPage } from '@/typings/api/ResResult'
import { Menu } from '@/typings/api/modules/menu'

// * 获取菜单列表
export const getMenuList = (params?: any) => {
  return http.get<ResPage<Menu.ResMenuList>>(`/api/user/menu`, params)
}

// * 新增菜单
export const addMenu = (params: any) => {
  return http.post(`/api/user/menu`, params)
}

// * 编辑菜单
export const editMenu = (params: any) => {
  return http.put(`/api/user/menu`, params)
}

// * 删除角色
export const delMenu = (menuId: any) => {
  return http.delete(`/api/user/menu/${menuId}`)
}
// * 根据角色ID查询菜单下拉树结构
export const roleMenuTree = (roleId: string) => {
  return http.get(`/api/user/tree/select/check/${roleId}`)
}

// * 查询菜单下拉树结构
export const menuTree = () => {
  return http.get(`/api/user/tree/select`)
}
