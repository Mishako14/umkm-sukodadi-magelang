import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getUMKM() {
  const snapshot = await getDocs(collection(db, "umkm"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}