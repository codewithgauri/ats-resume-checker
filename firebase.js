import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA38H8rcDAdjuWulqxHn-iIMKTbaxKK2fE",
    authDomain: "ats-checker-codewithgauri.firebaseapp.com",
    projectId: "ats-checker-codewithgauri",
    storageBucket: "ats-checker-codewithgauri.appspot.com",
    messagingSenderId: "53818704212",
    appId: "1:53818704212:web:c50a2a631a833c14c008c1",
    measurementId: "G-GK3SKX4VMD"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };


// gcloud projects add-iam-policy-binding ats-checker-codewithgauri --member='user:<USER_ACCOUNT>' --role='storage.admin'
// gcloud projects add-iam-policy-binding  ats-checker-codewithgauri --member='user:firebase-adminsdk-krbfa@ats-checker-codewithgauri.iam.gserviceaccount.com' --role='roles/editor'

//   firebase storage:bucket ats-checker-codewithgauri.appspot.com


// firebase use --add
// firebase storage:bucket ats-checker-codewithgauri.appspot.com
// firebase storage:rules
// firebase storage:upload --source=cors.json --destination=/.well-known/cors.json
