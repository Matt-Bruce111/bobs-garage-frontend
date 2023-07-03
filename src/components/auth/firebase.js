import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkMo2AIkYReZ210pCx8HoNn06rQsMUNAw",
  authDomain: "bobs-garage-3dcc5.firebaseapp.com",
  projectId: "bobs-garage-3dcc5",
  storageBucket: "bobs-garage-3dcc5.appspot.com",
  messagingSenderId: "470721863819",
  appId: "1:470721863819:web:09217603691d1de0f9f48e"
}

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)
