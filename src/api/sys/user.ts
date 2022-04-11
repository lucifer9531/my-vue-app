import { defHttp } from '/@/utils/http/axios';

import { LoginParams, LoginResultModel } from './model/userModel';
import type { ErrorMessageMode } from '/#/axios';
import { buildUUID } from '/@/utils/uuid';

enum Api {
  Login = '/api/auth/oauth/token',
  RSA = '/api/rsa',
  Logout = '/api/logout',
}

export function rsaApi() {
  return defHttp.get<string>({
    url: Api.RSA,
  });
}

export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params: {
        ...params,
        randomStr: buildUUID(),
        code: '',
        grant_type: 'password',
        scope: 'server',
        encrypt: 'RSA',
      },
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
