import { defineStore } from 'pinia'

import routeData from "@/services/routesData"

const useAppStore = defineStore({
  id: 'AppStore',
  state: () => ({
    routes: routeData,
    isLogin: true,
    systemTitle: import.meta.env.VITE_APP_NAME
  }),
  getters: {
  },
  actions: {
    checkIsLogin(): void {
        // this.isLogin = jwtToken.checkToken();
        // this.systemTitle = jwtToken.currentSystemTitle;
    },
    userLogout(): void {
        // others need to destroy
        this.isLogin = false;
    }
  }
})

export default useAppStore
