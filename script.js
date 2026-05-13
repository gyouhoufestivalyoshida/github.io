import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAlxZGPH72mvgePyM3RX_xy8xlhfv92Rk",
    authDomain: "yoshidagyouhoufestival1-5.firebaseapp.com",
    databaseURL: "https://yoshidagyouhoufestival1-5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "yoshidagyouhoufestival1-5",
    storageBucket: "yoshidagyouhoufestival1-5.firebasestorage.app",
    messagingSenderId: "439419753147",
    appId: "1:439419753147:web:f1b5a52e69d4e6e42f0f9e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const waitRef = ref(db, "waitTime");

onValue(waitRef, (snapshot) => {
  document.getElementById("wait").innerText =
    snapshot.val() + "分";
});
