import Vue from 'vue';
import App from './App.vue';

import { data, txt } from './constants';
import showMessage from './utils';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(data.message);
alert(txt.message);
showMessage();
