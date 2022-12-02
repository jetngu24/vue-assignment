import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

// import for firebase
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import './assets/main.css'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnrgqL0VjNgbDCc1ArrKHVfzLrUi28s9Q",
  authDomain: "vue-assignment-8bbd6.firebaseapp.com",
  projectId: "vue-assignment-8bbd6",
  storageBucket: "vue-assignment-8bbd6.appspot.com",
  messagingSenderId: "921380211242",
  appId: "1:921380211242:web:f1b15a1f8a255f73329153",
  measurementId: "G-GJS0X6P7EK"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.mount('#app');


