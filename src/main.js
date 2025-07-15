import { createApp } from 'vue';
import App from './App';
import router from './router';
import pinDirective from './shared/pin-directive';

createApp(App)
  .use(router)
  .directive('pin', pinDirective)
  .mount('#app');
