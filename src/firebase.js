import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1di_E_8wS0dd_34aITWP35Bm2iud2aQg",
  authDomain: "rohit-kumar-portfolio-ml.firebaseapp.com",
  databaseURL: "https://rohit-kumar-portfolio-ml-default-rtdb.firebaseio.com",
  projectId: "rohit-kumar-portfolio-ml",
  storageBucket: "rohit-kumar-portfolio-ml.appspot.com",
  messagingSenderId: "441302038699",
  appId: "1:441302038699:web:5e33b6c8d37945d6a45fee",
  measurementId: "G-J0LJH2ZDD4",
};

const app = initializeApp(firebaseConfig);

export default app;
