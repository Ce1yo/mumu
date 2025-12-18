// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSquMsChZ-hx5aMuDgXLQv2VVcdUJniHs",
  authDomain: "marchanddeglace-14d57.firebaseapp.com",
  projectId: "marchanddeglace-14d57",
  storageBucket: "marchanddeglace-14d57.firebasestorage.app",
  messagingSenderId: "222745646691",
  appId: "1:222745646691:web:167bd8c9265da004cc8a56",
  measurementId: "G-SV1D4NB6B7"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Initialiser Firestore
const db = firebase.firestore();
