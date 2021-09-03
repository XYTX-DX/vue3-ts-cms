import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行登录', payload)
    }
  },
  getters: {},
  mutations: {}
}

export default loginModule
