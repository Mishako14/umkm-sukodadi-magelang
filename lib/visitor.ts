import {
    doc,
    getDoc,
    updateDoc,
    increment,
    serverTimestamp,
  } from "firebase/firestore";
  import { db } from "./firebase";
  
  export async function incrementVisitor() {
    try {
      const today = new Date().toISOString().split("T")[0];
  
      // Cek apakah perangkat ini sudah dihitung hari ini
      const localKey = `visitor-${today}`;
  
      if (localStorage.getItem(localKey)) {
        return;
      }
  
      const docRef = doc(db, "statistics", "visitors");
      const snap = await getDoc(docRef);
  
      if (!snap.exists()) return null;
  
      const data = snap.data();
  
      // Jika hari berganti
      if (data.lastDate !== today) {
        await updateDoc(docRef, {
          yesterday: data.today,
          today: 1,
          total: increment(1),
          lastDate: today,
          lastUpdated: serverTimestamp(),
        });
      } else {
        await updateDoc(docRef, {
          today: increment(1),
          total: increment(1),
          lastUpdated: serverTimestamp(),
        });
      }
  
      // Simpan supaya tidak dihitung lagi hari ini
      localStorage.setItem(localKey, "true");
    } catch (err) {
      console.error("Visitor Error :", err);
    }
  }
  export async function getVisitorStats() {
    try {
      const docRef = doc(db, "statistics", "visitors");
      const snap = await getDoc(docRef);
  
      if (!snap.exists()) return null;
  
      return snap.data();
    } catch (err) {
      console.error("Get Visitor Stats Error:", err);
      return null;
    }
  }