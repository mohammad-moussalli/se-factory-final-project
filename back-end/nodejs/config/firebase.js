import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.PROJECT_API_KEY,
	authDomain: process.env.PROJECT_AUTH_DOMAIN,
	projectId: process.env.PROJECT_PROJECT_ID,
	storageBucket: process.env.PROJECT_STORAGE_BUCKET,
	messagingSenderId: process.env.PROJECT_MESSAGING_SENDER_ID,
	appId: process.env.PROJECT_API_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);
export default storage;