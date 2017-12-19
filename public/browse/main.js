import Vue from 'vue'
import router from './router'
import iView from 'iview';
import store from './store';

import './styles/iview-theme.less';
import './styles/main.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

Vue.use(iView);

var config = {
  apiKey: "AIzaSyDIyg9CKT-hisBdlPSSW-sxyjirUev-nSA",
  authDomain: "ticker-tape.firebaseapp.com",
  databaseURL: "https://ticker-tape.firebaseio.com",
  projectId: "ticker-tape",
  storageBucket: "ticker-tape.appspot.com",
  messagingSenderId: "771278693655"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  store.commit('user/setUserInfo', user);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view />'
})
