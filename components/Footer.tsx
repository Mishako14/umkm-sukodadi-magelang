"use client";
import Link from "next/link";
import {
  Store,
  MapPin,
  GraduationCap,
  ArrowUp,
  Users,
  CalendarDays,
  Globe,
  Clock3,
  BarChart3,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getVisitorStats } from "@/lib/visitor";

export default function Footer() {
  const [stats, setStats] = useState({
    today: 0,
    yesterday: 0,
    total: 0,
    lastUpdated: "-",
  });

  useEffect(() => {
    async function loadStats() {
      const data = await getVisitorStats();

      if (data) {
        setStats({
          today: data.today ?? 0,
          yesterday: data.yesterday ?? 0,
          total: data.total ?? 0,
          lastUpdated: data.lastUpdated?.toDate()
            ? data.lastUpdated.toDate().toLocaleString("id-ID")
            : "-",
        });
      }
    }

    loadStats();
  }, []);
  return (
    <footer className="relative mt-24 overflow-hidden bg-slate-900 text-white">

      {/* Blur */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg">

                <Store size={28} />

              </div>

              <div>

                <h2 className="text-2xl font-black">
                  UMKM Sukodadi
                </h2>

                <p className="text-emerald-300">
                  Digitalisasi UMKM
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-300">
              Website ini dikembangkan sebagai media promosi
              digital bagi UMKM Desa Sukodadi agar lebih mudah
              dikenal masyarakat luas dan mendukung transformasi
              digital pelaku usaha lokal.
            </p>

          </div>

          {/* Informasi */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Informasi
            </h3>

            <div className="space-y-5 text-slate-300">

              <div className="flex items-center gap-3">

                <MapPin
                  size={20}
                  className="text-emerald-400"
                />

                <span>
                  Desa Sukodadi, Kecamatan Bandongan,
                  Kabupaten Magelang
                </span>

              </div>

              <div className="flex items-center gap-3">

                <GraduationCap
                  size={20}
                  className="text-emerald-400"
                />

                <span>
                  KKN GIAT 16 Universitas Negeri Semarang
                </span>

              </div>

            </div>

          </div>

          {/* Menu */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Navigasi
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                href="/"
                className="transition hover:text-emerald-400"
              >
                Beranda
              </Link>

              <a
                href="#about"
                className="transition hover:text-emerald-400"
              >
                Tentang
              </a>

              <a
                href="#umkm"
                className="transition hover:text-emerald-400"
              >
                UMKM
              </a>

              <Link
                href="/admin/login"
                className="transition hover:text-emerald-400"
              >
                Login Admin
              </Link>

            </div>

          </div>
          {/* Statistik Website */}
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
  <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
    <BarChart3 className="text-green-400" size={20} />
    Statistik Website
  </h3>

  <div className="space-y-4">

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-gray-300">
        <Users size={18} className="text-green-400" />
        <span>Hari Ini</span>
      </div>
      <span className="text-[22px] font-semibold text-white">{stats.today}</span>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-gray-300">
        <CalendarDays size={18} className="text-green-400" />
        <span>Kemarin</span>
      </div>
      <span className="text-[22px] font-semibold text-white"> {stats.yesterday}</span>
    </div>

    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 text-gray-300">
        <Globe size={18} className="text-green-400" />
        <span>Total</span>
      </div>
      <span className="text-[22px] font-semibold text-white">{stats.total.toLocaleString("id-ID")}</span>
    </div>

    <div className="border-t border-white/10 pt-4">
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Clock3 size={16} className="text-green-400" />
        <span>Data Terakhir Diperbarui</span>
      </div>

      <p className="mt-1 text-white text-sm">
      {stats.lastUpdated}
      </p>
    </div>

  </div>
</div>

        </div>

        {/* Garis */}

        <div className="my-10 border-t border-slate-700"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-center text-slate-400">

            © {new Date().getFullYear()} UMKM Desa Sukodadi •
            Developed with{" "}

            <Heart
              size={16}
              className="mx-1 inline text-red-500"
              fill="currentColor"
            />

            by KKN GIAT 16 UNNES

          </p>

          <a
            href="#top"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>

    </footer>
  );
}