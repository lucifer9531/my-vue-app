import type { ErrorMessageMode } from '/#/axios';

import { defineStore } from 'pinia';
import { store } from '/@/store';
import { getAuthCache, setAuthCache } from '/@/utils/auth';
import { TOKEN_KEY } from '/@/enums/cacheEnum';
import { router } from '/@/router';
import { PageEnum } from '/@/enums/pageEnum';
import { LoginParams, LoginResultModel } from '/@/api/sys/model/userModel';
import { loginApi, rsaApi } from '/@/api/sys/user';

interface UserState {
  token?: string;
  publicKey?: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // token
    token: undefined,
    publicKey: undefined,
  }),
  getters: {
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getPublicKey(): string {
      return this.publicKey!;
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
    setPublicKey(info: string | undefined) {
      this.publicKey = info ? info : '';
    },
    resetState() {
      this.token = '';
    },
    async getRsaPublicKey(): Promise<void> {
      try {
        const publicKey = await rsaApi();
        this.setPublicKey(publicKey);
      } catch (error) {
        return Promise.reject(error);
      }
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
