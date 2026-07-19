"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { auth, db } from "@/lib/firebase";
import { uploadImage } from "@/lib/cloudinary";
import DashboardPieChart from "@/components/DashboardPieChart";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Dashboard() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [wa, setWa] = useState("");
  const [maps, setMaps] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const [listUMKM, setListUMKM] = useState<any[]>([]);
  const totalKategori = new Set(
    listUMKM.map((item) => item.kategori)
  ).size;
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleSave = async () => {
    try {
      // Validasi Nama
if (!nama.trim()) {
  toast.error("Nama UMKM wajib diisi!");
  return;
}

// Validasi Kategori
if (!kategori.trim()) {
  toast.error("Kategori wajib diisi!");
  return;
}

// Validasi Deskripsi
if (deskripsi.trim().length < 10) {
  toast.error("Deskripsi minimal 10 karakter!");
  return;
}

// Validasi Alamat
if (!alamat.trim()) {
  toast.error("Alamat wajib diisi!");
  return;
}

// Validasi WhatsApp
const waRegex = /^08[0-9]{8,11}$/;

if (!waRegex.test(wa)) {
  toast.error(
    "Nomor WhatsApp harus diawali 08 dan terdiri dari 10–13 digit."
  );
  return;
}

if (!waRegex.test(wa)) {
  toast.error("Nomor WhatsApp tidak valid!");
  return;
}

// Validasi Google Maps
if (
  maps.trim() &&
  !maps.includes("google.com/maps") &&
  !maps.includes("maps.app.goo.gl")
) {
  toast.error("Masukkan link Google Maps yang valid!");
  return;
}

// Validasi Foto
if (!editId && !image) {
  toast.error("Foto UMKM wajib dipilih!");
  return;
}
      let imageUrl = "";

      if (image) {
        imageUrl = await uploadImage(image);
      }

      if (editId) {
        const data: any = {
          nama,
          kategori,
          deskripsi,
          alamat,
          wa,
          maps,
        };

        if (imageUrl !== "") {
          data.gambar = imageUrl;
        }

        await updateDoc(doc(db, "umkm", editId), data);

        toast.success("UMKM berhasil diperbarui!");
      } else {
        await addDoc(collection(db, "umkm"), {
          nama,
          kategori,
          deskripsi,
          alamat,
          wa,
          maps,
          gambar: imageUrl,
          createdAt: new Date(),
        });

        toast.success("UMKM berhasil ditambahkan!");
      }

      await fetchUMKM();

      setEditId(null);
      setNama("");
      setKategori("");
      setDeskripsi("");
      setAlamat("");
      setWa("");
      setMaps("");
      setImage(null);
      setPreview("");

      const fileInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error(error);
      toast.error("Gagal menyimpan data!");
    }
  };

  const fetchUMKM = async () => {
    try {
      const snapshot = await getDocs(collection(db, "umkm"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListUMKM(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    const yakin = confirm("Yakin ingin menghapus UMKM ini?");
    if (!yakin) return;

    try {
      await deleteDoc(doc(db, "umkm", id));
      toast.success("UMKM berhasil dihapus!");
      await fetchUMKM();
    } catch (error) {
      console.error(error);
      toast.error("Gagal menghapus UMKM!");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  const handleEdit = (item: any) => {
    setEditId(item.id);

    setNama(item.nama);
    setKategori(item.kategori);
    setDeskripsi(item.deskripsi);
    setAlamat(item.alamat);
    setWa(item.wa);
    setMaps(item.maps);
    setPreview(item.gambar || "");

    setImage(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoading(false);
        router.replace("/admin/login");
      } else {
        fetchUMKM();
        setLoading(false);
      }
    });
  
    return () => unsubscribe();
  }, [router]);
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
  
          <p className="mt-5 text-gray-600">
            Memverifikasi Admin...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">
            Dashboard Admin
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <p className="mt-2 text-gray-600">
          {editId ? "Edit Data UMKM" : "Tambah UMKM Baru"}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">

  <div className="rounded-xl bg-green-100 p-6 shadow">
    <p className="text-gray-600">
      Total UMKM
    </p>

    <h2 className="mt-2 text-4xl font-bold text-green-700">
      {listUMKM.length}
    </h2>
  </div>

  <div className="rounded-xl bg-blue-100 p-6 shadow">
    <p className="text-gray-600">
      Total Kategori
    </p>

    <h2 className="mt-2 text-4xl font-bold text-blue-700">
      {totalKategori}
    </h2>
  </div>

  <div className="rounded-xl bg-yellow-100 p-6 shadow">
    <p className="text-gray-600">
      Status
    </p>

    <h2 className="mt-2 text-2xl font-bold text-yellow-700">
      Aktif
    </h2>
  </div>

  <DashboardPieChart data={listUMKM} />

</div>

        <input
          className="mt-8 w-full rounded-lg border-2 border-gray-300 p-3 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
          placeholder="Nama UMKM"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <input
          className="mt-4 w-full rounded-lg border-2 border-gray-300 p-3 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
          placeholder="Kategori"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        />

        <textarea
          className="mt-4 w-full rounded-lg border-2 border-gray-300 p-3 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
          rows={5}
          placeholder="Deskripsi"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        />

        <input
          className="mt-4 w-full rounded-lg border-2 border-gray-300 p-3 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
          placeholder="Alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />

<input
  className="mt-4 w-full rounded-lg border-2 border-gray-300 p-3 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
  placeholder="Nomor WhatsApp"
  value={wa}
  maxLength={15}
  onChange={(e) => {
    let angka = e.target.value.replace(/\D/g, "");
  
    // Format 628xxxx -> 08xxxx
    if (angka.startsWith("62")) {
      angka = "0" + angka.substring(2);
    }
  
    // Format 8xxxx -> 08xxxx
    else if (angka.startsWith("8")) {
      angka = "0" + angka;
    }
  
    setWa(angka);
  }}
/>
        <input
          type="url"
          className="mt-4 w-full rounded-lg border-2 border-gray-300 p-3 text-black placeholder:text-gray-500 focus:border-green-600 focus:outline-none"
          placeholder="Link Google Maps"
          value={maps}
          onChange={(e) => setMaps(e.target.value)}
        />

<div className="mt-5">

<label className="mb-2 block font-semibold text-gray-700">
  Foto UMKM
</label>

<label
  htmlFor="foto"
  className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-green-500 hover:bg-green-50"
>
  <span className="text-5xl">📷</span>

  <p className="mt-3 font-semibold text-gray-700">
    Klik untuk memilih gambar
  </p>

  <p className="text-sm text-gray-500">
    JPG, PNG, JPEG
  </p>
</label>

<input
  id="foto"
  type="file"
  accept="image/*"
  className="hidden"
  onChange={(e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  }}
/>
{image && (
  <p className="mt-3 text-sm font-medium text-green-600">
    ✅ {image.name}
  </p>
)}

</div>

        {(image || preview) && (
          <div className="mt-4">
            <img
              src={image ? URL.createObjectURL(image) : preview}
              alt="Preview"
              className="h-56 w-full rounded-lg border object-cover"
            />
          </div>
        )}

        <button
          onClick={handleSave}
          className="mt-8 w-full rounded-lg bg-green-600 py-3 text-lg font-semibold text-white hover:bg-green-700"
        >
          {editId ? "Update UMKM" : "Simpan UMKM"}
        </button>

        <hr className="my-10 border-gray-300" />

        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Daftar UMKM
        </h2>

        {listUMKM.map((item) => (

<div
  key={item.id}
  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:shadow-xl"
>

  <div className="flex flex-col md:flex-row">

    {/* Foto */}
    <div className="md:w-56">

      <img
        src={item.gambar || "/images/no-image.png"}
        alt={item.nama}
        className="h-52 w-full object-cover"
      />

    </div>

    {/* Informasi */}
    <div className="flex flex-1 flex-col justify-between p-6">

      <div>

        <h3 className="text-2xl font-bold text-gray-900">
          {item.nama}
        </h3>

        <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {item.kategori}
        </span>

        <p className="mt-4 text-gray-600">
          📍 {item.alamat || "-"}
        </p>

        <p className="mt-2 text-gray-600">
          📞 {item.wa || "-"}
        </p>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={() => handleEdit(item)}
          className="rounded-lg bg-yellow-500 px-5 py-2 font-semibold text-white hover:bg-yellow-600"
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(item.id)}
          className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
        >
          Hapus
        </button>

      </div>

    </div>

  </div>

</div>

))}
      </div>
    </main>
  );
}