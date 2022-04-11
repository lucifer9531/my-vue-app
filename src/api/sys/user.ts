import { defHttp } from '/@/utils/http/axios';

import { LoginParams, LoginResultModel } from './model/userModel';
import type { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/api/auth/oauth/token',
  Logout = '/logout',
}

export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
      headers: {
        Authorization: 'Basic cGNmcm9udDpwY2Zyb250',
      },
    },
    {
      errorMessageMode: mode,
      joinParamsToUrl: true,
    },
  );
}
