import { UMKM } from "@/types/umkm";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";

type Props = {
  item: UMKM;
};

export default function CardUMKM({ item }: Props) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Foto */}
      <div className="relative h-64 overflow-hidden bg-slate-100">

        <Image
          src={
            item.gambar && item.gambar !== ""
              ? item.gambar
              : "/images/no-image.png"
          }
          alt={item.nama}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow">

          {item.kategori}

        </span>

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="line-clamp-1 text-2xl font-black text-slate-900">

          {item.nama}

        </h2>

        <div className="mt-3 flex items-center gap-2 text-amber-500">

          <Star
            size={16}
            fill="currentColor"
          />

          <span className="text-sm font-semibold">
            Produk Unggulan
          </span>

        </div>

        <div className="mt-4 flex items-center gap-2 text-slate-500">

          <MapPin
            size={17}
            className="text-red-500"
          />

          <span className="line-clamp-1 text-sm">

            {item.alamat || "Alamat belum tersedia"}

          </span>

        </div>

        <p className="mt-5 line-clamp-3 leading-7 text-slate-600">

          {item.deskripsi || "Belum tersedia deskripsi UMKM."}

        </p>

        <Link
          href={`/umkm/${item.id}`}
          className="mt-7 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
        >

          Lihat Detail

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </Link>

      </div>

    </div>
  );
}