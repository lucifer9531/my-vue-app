/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResultModel {
  access_token: string;
  dept_code: null | string;
  dept_id: string;
  dept_ids: null | string[] | number[];
  dept_name: string | null;
  duty_ids: number[] | string[];
  expires_in: number;
  grade: string;
  isAdmin: string | number;
  license: string;
  loginName: string;
  org_code: null | string | number;
  org_id: null | string | number;
  org_ids: null | string[] | number[];
  org_name: null | string;
  real_name: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  user_id: string;
  username: string;
}
