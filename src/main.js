import Vue from 'vue'
import App from './App.vue'

import http from "./http"
import qs  from "qs"

window.$http = http;
window.$qs = qs;

new Vue({
  render: h => h(App)
}).$mount('#app')
