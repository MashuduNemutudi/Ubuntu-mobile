// firebaseConfig.ts
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native"; // React Native version
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMdpes-lhUOYqLfSsqgrv5p0wQiodj5Q4",
  authDomain: "ubuntu-d5f98.firebaseapp.com",
  projectId: "ubuntu-d5f98",
  storageBucket: "ubuntu-d5f98.appspot.com",
  messagingSenderId: "745492702695",
  appId: "1:745492702695:web:101e885d43fe6e457a4942",
  measurementId: "G-FM7QCT5ZPJ",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);

// Firebase Auth instance for React Native with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
