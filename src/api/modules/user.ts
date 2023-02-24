/**
 * @Description: 用户管理模块
 * @Date: 2023/1/31 11:58 AM
 */
import http from '@/api'
import { ResPage } from '@/typings/api/ResResult'
import { User } from '@/typings/api/modules/user'

// * 获取用户列表
export const getUserList = (params: User.ReqUserParams) => {
  return http.post<ResPage<User.ResUserList>>(`/user/list`, params)
}
