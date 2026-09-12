import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import { getFirestore, initializeFirestore, Firestore } from "firebase/firestore";

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
let app: FirebaseApp;
let db: Firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  // Initialize Firestore with long polling to prevent Next.js SSR/Edge network drops
  db = initializeFirestore(app, { experimentalForceLongPolling: true });
} else {
  app = getApp();
  db = getFirestore(app);
}

// Initialize Analytics only on the client side
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
