import Vue from 'vue';
import App from './App.vue';
import WebSocketPlugin from './lib/index'

Vue.config.productionTip = false;

Vue.use(WebSocketPlugin, "ws://localhost:8090")

new Vue({
  render: (h) => h(App),
}).$mount('#app');
