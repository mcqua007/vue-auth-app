// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
let app;
let config = {
  apiKey: "AIzaSyAsaYC79Qvy1OfcmREKnx5qDwyG7GdEo6U",
  authDomain: "vue-auth-project-99810.firebaseapp.com",
  databaseURL: "https://vue-auth-project-99810.firebaseio.com",
  projectId: "vue-auth-project-99810",
  storageBucket: "vue-auth-project-99810.appspot.com",
  messagingSenderId: "255616009393"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
