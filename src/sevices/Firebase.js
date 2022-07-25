import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiAIpU85_eVmHjjayQXGDiXO5QpDzhIoo",
  authDomain: "tram-thuy.firebaseapp.com",
  projectId: "tram-thuy",
  storageBucket: "tram-thuy.appspot.com",
  messagingSenderId: "821010582586",
  appId: "1:821010582586:web:926b450b6b48c41c663903",
  measurementId: "G-50Q8X8GDTN",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth, firebase };
// export default firebase
