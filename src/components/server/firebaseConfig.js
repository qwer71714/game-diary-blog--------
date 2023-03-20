// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6jAWN5SEq0Y8u5pmwflRC8NX3EYyQvwQ",
  authDomain: "gamediary-blog.firebaseapp.com",
  projectId: "gamediary-blog",
  storageBucket: "gamediary-blog.appspot.com",
  messagingSenderId: "172516435051",
  appId: "1:172516435051:web:3df5fc1cfa270ae9ae3d2e",
  measurementId: "G-GW0E431BX2"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);