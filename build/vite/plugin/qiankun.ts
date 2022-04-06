import type { Plugin } from 'vite';
import qiankun from 'vite-plugin-qiankun';
import { name } from '../../../package.json';

// useDevMode 开启时与热更新插件冲突
const useDevMode = true; // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

export function configQianKunPlugin(): Plugin {
  return qiankun(name, { useDevMode }) as Plugin;
}
