import * as firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyAtp6BCyR9FraK0QXfvQQ1gZrcD7apYpOY",
	authDomain: "eventzon-19fcb.firebaseapp.com",
	projectId: "eventzon-19fcb",
	storageBucket: "eventzon-19fcb.appspot.com",
	messagingSenderId: "824736510224",
	appId: "1:824736510224:web:5e1c8d277316e39a90b595",
};

firebase.default.initializeApp(firebaseConfig);

export const firebaseFirestore = firebase.default.firestore();
