import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAlxZGPH72mvgePyM3RX_xy8xlhfv92Rk",
  authDomain: "yoshidagyouhoufestival1-5.firebaseapp.com",
  databaseURL: "https://yoshidagyouhoufestival1-5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yoshidagyouhoufestival1-5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const waitRef = ref(db, "waitTime");

onValue(waitRef, (snapshot) => {
  document.getElementById("wait").innerText =
    snapshot.val() + "分";
});
