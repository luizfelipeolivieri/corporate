
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyBL4Hy0VNHm-GJV0ItAwqJUugetksmvujM",
authDomain: "olivieri-site.firebaseapp.com",
projectId: "olivieri-site",
storageBucket: "olivieri-site.firebasestorage.app",
messagingSenderId: "759268911996",
appId: "1:759268911996:web:ff78c89893857423d1d2f9",
measurementId: "G-N09GMDHLCJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
