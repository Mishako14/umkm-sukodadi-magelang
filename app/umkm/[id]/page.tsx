import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Tag,
  Star,
} from "lucide-react";

import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailUMKM({ params }: Props) {
  const { id } = await params;

  const docRef = doc(db, "umkm", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const umkm = docSnap.data();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16">

      <div className="mx-auto max-w-4xl px-6">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-700 shadow transition hover:bg-emerald-600 hover:text-white"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>

        {/* Card */}
        <div className="mt-8 overflow-hidden rounded-[32px] bg-white shadow-xl">

          {/* Foto */}

          <div className="relative h-[480px] w-full bg-slate-100">

            <Image
              src={
                umkm.gambar && umkm.gambar !== ""
                  ? umkm.gambar
                  : "/images/no-image.png"
              }
              alt={umkm.nama}
              fill
              priority
              className="object-contain p-6 transition duration-500 hover:scale-105"
            />

          </div>

          {/* Isi */}

          <div className="p-8 lg:p-10">

            <h1 className="text-5xl font-black text-slate-900">
              {umkm.nama}
            </h1>

            <div className="mt-5 flex flex-wrap gap-3">

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">

                <Tag size={16} />

                {umkm.kategori || "Kategori"}

              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">

                <Star size={16} />

                Produk Unggulan

              </span>

            </div>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Produk unggulan UMKM Desa Sukodadi yang dipromosikan melalui
              platform digital KKN GIAT 16 Universitas Negeri Semarang.
            </p>

            <div className="my-8 h-px bg-slate-200"></div>

            {/* Alamat */}

            <div className="mb-8">

              <div className="flex items-center gap-3">

                <MapPin className="text-red-500" />

                <h2 className="text-xl font-bold">
                  Alamat
                </h2>

              </div>

              <p className="mt-3 leading-8 text-slate-600">

                {umkm.alamat || "-"}

              </p>

            </div>

            {/* Deskripsi */}

            <div className="mb-8">

              <div className="flex items-center gap-3">

                📝

                <h2 className="text-xl font-bold">
                  Deskripsi
                </h2>

              </div>

              <p className="mt-3 leading-8 text-slate-600">

                {umkm.deskripsi || "Belum ada deskripsi."}

              </p>

            </div>

            {/* Kontak */}

            <div className="mb-10">

              <div className="flex items-center gap-3">

                <Phone className="text-emerald-600" />

                <h2 className="text-xl font-bold">
                  Kontak
                </h2>

              </div>

              <p className="mt-3 text-slate-600">

                {umkm.wa || "-"}

              </p>

            </div>

            {/* Tombol */}

            <div className="grid gap-4 md:grid-cols-2">

              {umkm.wa && (
                <a
                  href={`https://wa.me/${umkm.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-emerald-600 py-4 text-center text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-emerald-700"
                >
                  💬 Hubungi Penjual
                </a>
              )}

              {umkm.maps && (
                <a
                  href={umkm.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-sky-600 py-4 text-center text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-700"
                >
                  🗺️ Lihat Lokasi
                </a>
              )}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}