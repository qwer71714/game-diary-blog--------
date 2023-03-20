// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export async function uploadImage(file) {
  const storage = getStorage();
  const storageRef = ref(storage, 'images/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
      },
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
}

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

export default firebaseConfig;