import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
    apiKey: "AIzaSyAGVR-c5UVfspdZLmeNd9MFLrj7WYjBOqk",
    authDomain: "solarcasares-fa061.firebaseapp.com",
    projectId: "solarcasares-fa061",
    storageBucket: "solarcasares-fa061.appspot.com",
    messagingSenderId: "165106844906",
    appId: "1:165106844906:web:6869e0a346daa8ad140393",
    measurementId: "G-9J71GKPFV6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Inicializar Analytics
const analytics = getAnalytics(app);

export { db, analytics };