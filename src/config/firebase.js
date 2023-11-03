import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9GCqJ62-f1xKLnjWYwF4VK2SC4ZQnk48",
  authDomain: "todo-baas.firebaseapp.com",
  projectId: "todo-baas",
  storageBucket: "todo-baas.appspot.com",
  messagingSenderId: "464314946686",
  appId: "1:464314946686:web:0754dfb57546d60b60f42f"
};

// Initialize Firebase and connect to firebase //
const app = initializeApp(firebaseConfig);

// connect to firestore db //
export const db = getFirestore(app);

