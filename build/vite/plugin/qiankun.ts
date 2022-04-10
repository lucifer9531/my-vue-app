import type { Plugin } from 'vite';
import qiankun from 'vite-plugin-qiankun';
import { name } from '../../../package.json';

// useDevMode conflict with hot update plugin when enabled
// If the sub-application vite is loaded in the main application,
// this must be turned on, otherwise the vite loading is unsuccessful,
// and running it alone has no effect
const useDevMode = true;

export function configQianKunPlugin(): Plugin {
  return qiankun(name, { useDevMode }) as Plugin;
}
