import { createApp } from 'vue'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

// createApp(App).mount('#app')

let instance = null;
function render(props = {}) {
    instance = createApp(App);
    createApp(App).mount('#app')
}

renderWithQiankun({
    mount(props) {
        console.log("viteapp mount");
        render(props);
    },
    bootstrap() {
        console.log('bootstrap');
    },
    unmount(props) {
        instance = null;
        console.log("vite被卸载了");
    },
});


if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
}
