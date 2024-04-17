import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyD6HMGTMJeYifxK60xTsy_TmbTQGRSQ4ik",
  authDomain: "react-contact-dbbfd.firebaseapp.com",
  databaseURL: "https://react-contact-dbbfd-default-rtdb.firebaseio.com",
  projectId: "react-contact-dbbfd",
  storageBucket: "react-contact-dbbfd.appspot.com",
  messagingSenderId: "753783415418",
  appId: "1:753783415418:web:1a6d406d3c7289fc4691c3"
};

  const app = initializeApp(firebaseConfig);
  const todoRef = getDatabase(app);
  
  export { todoRef }; // 'tasks' is the reference to your to-do list