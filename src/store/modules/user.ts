import type { ErrorMessageMode } from '/#/axios';

import { defineStore } from 'pinia';
import { store } from '/@/store';
import { getAuthCache, setAuthCache } from '/@/utils/auth';
import { TOKEN_KEY } from '/@/enums/cacheEnum';
import { router } from '/@/router';
import { PageEnum } from '/@/enums/pageEnum';
import { LoginParams, LoginResultModel } from '/@/api/sys/model/userModel';
import { loginApi } from '/@/api/sys/user';

interface UserState {
  token?: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // token
    token: undefined,
  }),
  getters: {
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
    resetState() {
      this.token = '';
    },
    async login(
      params: LoginParams & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      },
    ): Promise<LoginResultModel> {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        const data = await loginApi(loginParams, mode);
        const { access_token } = data;
        // save token
        this.setToken(access_token);
        goHome && (await router.replace(PageEnum.BASE_HOME));
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async logout(goLogin = false) {
      if (this.getToken) {
        try {
          // TODO 退出登陆实现
        } catch {
          console.log('注销Token失败');
        }
      }
      this.setToken(undefined);
      goLogin && router.push(PageEnum.BASE_LOGIN);
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
