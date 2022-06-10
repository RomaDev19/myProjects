import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import loader from 'vue-ui-preloader';
import router from './router';
import store from './store';

require('@/store/subscriber');

axios.defaults.baseURL = 'https://waxen-api.mariposa.in.ua/crm';
axios.defaults.showLoader = true;

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(loader);
Vue.use(require('vue-moment'));
store.dispatch('auth/attempt', localStorage.getItem('waxeenToken')).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
    created() {
      axios.interceptors.request.use(
        (config) => {
          if (config.showLoader) {
            store.dispatch('loader/pending');
          }
          return config;
        },
        (error) => {
          if (error.config.showLoader) {
            store.dispatch('loader/done');
          }
          return Promise.reject(error);
        }
      );
      axios.interceptors.response.use(
        (response) => {
          if (response?.config?.showLoader) {
            store.dispatch('loader/done');
          }

          return response;
        },
        (error) => {
          let response = error.response;

          if (response?.config?.showLoader) {
            store.dispatch('loader/done');
          }

          return Promise.reject(error);
        }
      );
    },
  }).$mount('#app');
});
