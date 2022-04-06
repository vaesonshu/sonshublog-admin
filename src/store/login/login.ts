import { Module } from 'vuex'
import router from '@/router'
import localCache from '@/utils/cache'
import { IAccount } from '@/service/login/type'
import { accountLoginRequest, requestUserInfoById } from '@/service/login/login'
import { ILoginState } from './types'
import { IRootState } from '../types'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [
        {
          children: [
            {
              id: 1,
              name: '创建用户1',
              parentId: 2,
              type: 2
            },
            {
              id: 2,
              name: '创建用户2',
              parentId: 2,
              type: 2
            },
            {
              id: 3,
              name: '创建用户3',
              parentId: 2,
              type: 1
            }
          ],
          id: 34,
          name: '系统总揽1',
          type: 1
        },
        {
          children: [
            {
              id: 7,
              name: '创建管理1',
              parentId: 2,
              type: 2
            },
            {
              id: 8,
              name: '创建管理2',
              parentId: 2,
              type: 2
            },
            {
              id: 9,
              name: '创建管理3',
              parentId: 2,
              type: 2
            }
          ],
          id: 35,
          name: '系统总揽2',
          type: 1
        },
        {
          id: 36,
          name: '系统总揽3',
          type: 2
        },
        {
          id: 37,
          name: '系统总揽4',
          type: 2
        }
      ]
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行函数2', payload)
    // }
  }
}

export default loginModule
