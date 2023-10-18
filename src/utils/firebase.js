import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-401910.firebaseapp.com",
  projectId: "nextblog-401910",
  storageBucket: "nextblog-401910.appspot.com",
  messagingSenderId: "1087252100703",
  appId: "1:1087252100703:web:3508c336a11962b06dcdea",
};

export const app = initializeApp(firebaseConfig);
