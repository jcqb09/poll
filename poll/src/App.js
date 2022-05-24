import './App.css';
import PollFunc from './PollFunc';
import { initializeApp } from "firebase/app"
import { initializeFirestore, collection, getDocs } from "firebase/firestore";

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const firestoreDB = initializeFirestore(firebaseApp, {
    experimentalForceLongPolling: true, // this line
    useFetchStreams: false, // and this line
  })
  
  getDocs(collection(firestoreDB, "responses"))
      .then((allDocs) => {allDocs.forEach((doc) => console.log(doc.data()))})
 
  return (
    <>
    <h1> Least Favorite Color </h1>
    <PollFunc/>
    </>
  );
}

export default App;
