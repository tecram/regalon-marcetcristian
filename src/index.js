import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'


import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBtFomLNoHOXYirOWx5Vv4pGtNEZQgJJrw",
  authDomain: "regalon.firebaseapp.com",
  projectId: "regalon",
  storageBucket: "regalon.appspot.com",
  messagingSenderId: "221346609209",
  appId: "1:221346609209:web:1e42986c344be38c8575e8"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
