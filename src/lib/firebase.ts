import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgjKkwqTNhoSHkh8ygmv04DpLuQOjLINY",
  authDomain: "rkvalley.firebaseapp.com",
  projectId: "rkvalley",
  storageBucket: "rkvalley.firebasestorage.app",
  messagingSenderId: "466115203354",
  appId: "1:466115203354:web:67afeb86575248582d9ca3",
  measurementId: "G-JLB2RB0SH7"
};

// Initialize Firebase securely (avoiding double initialization)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only on the client side
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
