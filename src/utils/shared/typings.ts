import BaseShared from './base';

import { Store } from 'redux';

type Mutation = {
  type: string;
  payload: any;
};

type Pool = Store;

export { BaseShared, Pool, Mutation };
