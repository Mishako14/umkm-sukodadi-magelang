"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import CardUMKM from "@/components/CardUMKM";
import Statistic from "@/components/Statistic";
import Footer from "@/components/Footer";
import About from "@/components/About";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [kategori, setKategori] = useState("Semua");
  const [dataUMKM, setDataUMKM] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUMKM = async () => {
      setLoading(true);
  
      try {
        const res = await fetch("/api/umkm");
        const data = await res.json();
  
        setDataUMKM(data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUMKM();
  }, []);

  const filteredUMKM = dataUMKM.filter((item) => {
    const cocokSearch =
      item.nama.toLowerCase().includes(keyword.toLowerCase()) ||
      item.kategori.toLowerCase().includes(keyword.toLowerCase());

    const cocokKategori =
      kategori === "Semua" || item.kategori === kategori;

    return cocokSearch && cocokKategori;
  });

  const kategoriList = [
    "Semua",
    ...Array.from(new Set(dataUMKM.map((item) => item.kategori))),
  ];

  return (
    <div id="top">
    
    <BackgroundMusic />
    
    <Navbar />

    <div className="pt-20">
  <Hero />
</div>

    <About />

    <Statistic />

<section

  id="umkm"
  className="mx-auto max-w-7xl px-6 py-12"
>
{/* Judul Section */}
<div className="mb-12 text-center">

  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

    🌿 Produk Lokal

  </span>

  <h2 className="mt-5 text-5xl font-black text-slate-900">

    Jelajahi UMKM Desa Sukodadi

  </h2>

  <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500">

    Temukan berbagai produk unggulan hasil karya pelaku UMKM
    Desa Sukodadi yang dapat dihubungi secara langsung.

  </p>

</div>

{/* Search */}
<Search
  value={keyword}
  onChange={setKeyword}
/>

{/* Filter */}
<div className="mt-10 mb-12 flex flex-wrap justify-center gap-3">
  {kategoriList.map((item) => (
    <button
      key={item}
      onClick={() => setKategori(item)}
      className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
        kategori === item
          ? "bg-emerald-600 text-white shadow-lg"
          : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-600 hover:text-emerald-600"
      }`}
    >
      {item}
    </button>
  ))}
</div>
<p className="mb-8 text-center text-slate-500">

  Menampilkan

  <span className="mx-2 font-bold text-emerald-600">
    {filteredUMKM.length}
  </span>

  UMKM

</p>

        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          UMKM Desa Sukodadi
        </h2>

        {loading ? (

<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

{[1,2,3,4,5,6].map((item)=>(
  <div
    key={item}
    className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
  >

    <div className="h-64 animate-pulse bg-slate-200"></div>

    <div className="space-y-4 p-6">

      <div className="h-7 w-3/4 animate-pulse rounded bg-slate-200"></div>

      <div className="h-5 w-1/2 animate-pulse rounded bg-slate-200"></div>

      <div className="h-5 w-full animate-pulse rounded bg-slate-200"></div>

      <div className="h-5 w-5/6 animate-pulse rounded bg-slate-200"></div>

      <div className="mt-8 h-12 animate-pulse rounded-2xl bg-slate-200"></div>

    </div>

  </div>
))}

</div>

) : filteredUMKM.length === 0 ? (

  <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-white py-20 text-center shadow-sm">
  
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
      🔍
    </div>
  
    <h3 className="mt-6 text-2xl font-bold text-slate-900">
      UMKM Tidak Ditemukan
    </h3>
  
    <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500">
      Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
    </p>
  
  </div>
  
  ) : (

<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

  {filteredUMKM.map((item) => (
    <CardUMKM
      key={item.id}
      item={item}
    />
  ))}

</div>

)}
      </section>

      <Footer />
      </div>
  );
}
