import Vue from 'vue'
import App from './App.vue'

import UUID from "vue-uuid";

import vuetify from './plugins/vuetify';



Vue.config.productionTip = false
Vue.use(UUID);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// import UUID from "vue-uuid";

// import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'



// import 'bootstrap/dist/css/bootstrap.css'
// import vuetify from './plugins/vuetify';

// Vue.config.productionTip = false

// Vue.use(UUID);


// Vue.use(VueMoment, {
//   moment,
// })



// new Vue({
//   router,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
