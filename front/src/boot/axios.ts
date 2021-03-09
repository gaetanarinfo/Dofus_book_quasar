import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  // axios.defaults.baseURL = 'http://dofus-book.site:8000/' // Production
  axios.defaults.baseURL = 'http://127.0.0.1:8000/' // Dev 
  axios.defaults.withCredentials = true
  Vue.prototype.$axios = axios
});
