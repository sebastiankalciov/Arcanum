
import { initializeApp} from "firebase/app";
import {initializeAuth} from "firebase/auth";
//import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyCbim_JUjwr2Ufym_BMClMlrnhTGdxDnsM",
	authDomain: "arcanum-7148b.firebaseapp.com",
	projectId: "arcanum-7148b",
	storageBucket: "arcanum-7148b.firebasestorage.app",
	messagingSenderId: "853881279124",
	appId: "1:853881279124:web:c462998b5066e2b1889a81"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);

const firestore = getFirestore(app)

export {auth, firestore}