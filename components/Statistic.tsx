"use client";

import { useEffect, useState } from "react";

export default function Statistic() {
  const [totalUMKM, setTotalUMKM] = useState(0);
  const [totalKategori, setTotalKategori] = useState(0);

  useEffect(() => {
    const fetchUMKM = async () => {
      try {
        const res = await fetch("/api/umkm");
        const data = await res.json();

        setTotalUMKM(data.length);

        const kategori = new Set(
          data.map((item: any) => item.kategori)
        );

        setTotalKategori(kategori.size);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUMKM();
  }, []);

  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Statistik UMKM
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Gambaran singkat perkembangan UMKM Desa Sukodadi.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Total UMKM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
              🏪
            </div>

            <h3 className="mt-6 text-5xl font-extrabold text-emerald-600">
              {totalUMKM}
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-600">
              UMKM Terdaftar
            </p>

          </div>

          {/* Total Kategori */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
              📂
            </div>

            <h3 className="mt-6 text-5xl font-extrabold text-blue-600">
              {totalKategori}
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-600">
              Kategori Produk
            </p>

          </div>

          {/* Status */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-4xl">
              🚀
            </div>

            <h3 className="mt-6 text-3xl font-extrabold text-amber-600">
              Aktif
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-600">
              Status Website
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}