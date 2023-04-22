import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCZdoxi-6vgH1yepYeItZit9owawJ2tQAs",
  authDomain: "test-application-f7cc0.firebaseapp.com",
  projectId: "test-application-f7cc0",
  storageBucket: "test-application-f7cc0.appspot.com",
  messagingSenderId: "145460152559",
  appId: "1:145460152559:web:1981814bb82ab5b553731a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
