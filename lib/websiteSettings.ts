import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface WebsiteSettings {
  siteName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  footer: string;
}

const defaultSettings: WebsiteSettings = {
  siteName: "Website UMKM Desa Sukodadi",
  tagline: "Temukan Produk Lokal Terbaik",
  heroTitle: "Website Informasi UMKM",
  heroSubtitle: "Mendukung Promosi Produk Lokal Desa Sukodadi",
  footer: "Powered by KKN GIAT 16 UNNES",
};

const docRef = doc(db, "settings", "website");

export async function getWebsiteSettings() {
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    await setDoc(docRef, defaultSettings);
    return defaultSettings;
  }

  return snap.data() as WebsiteSettings;
}

export async function saveWebsiteSettings(data: WebsiteSettings) {
  await setDoc(docRef, data);
}