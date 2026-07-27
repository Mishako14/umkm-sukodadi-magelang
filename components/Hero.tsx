"use client";

import Image from "next/image";
import { getWebsiteSettings } from "@/lib/websiteSettings";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Hero() {
  const [totalUMKM, setTotalUMKM] = useState(0);
  const [website, setWebsite] = useState({
    heroTitle: "UMKM Digital",
    heroSubtitle: "Desa Sukodadi",
    tagline: "🌿 Digitalisasi UMKM Desa Sukodadi",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "umkm"));
        setTotalUMKM(snapshot.size);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    async function loadWebsite() {
      const data = await getWebsiteSettings();
  
      setWebsite({
        heroTitle: data.heroTitle,
        heroSubtitle: data.heroSubtitle,
        tagline: data.tagline,
      });
    }
  
    loadWebsite();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-500">

      {/* Background Blur */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-white/10 blur-3xl"></div>

      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <div className="relative z-10">

          <span className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
          {website.tagline}
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
          {website.heroTitle}
          </h1>

          <h2 className="mt-4 text-3xl font-semibold text-emerald-100">
          {website.heroSubtitle}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-emerald-50">
            Platform digital yang membantu masyarakat menemukan berbagai
            produk unggulan UMKM Desa Sukodadi secara lebih mudah, cepat,
            dan modern.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#umkm"
              className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Jelajahi UMKM

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/admin/login"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:bg-white hover:text-emerald-700"
            >
              Login Admin
            </Link>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative hidden justify-center lg:flex">

          {/* Floating Card */}

          <div className="absolute -left-10 top-16 z-20 rounded-3xl bg-white p-5 shadow-2xl">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-emerald-100 p-4">

                <Store
                  size={28}
                  className="text-emerald-600"
                />

              </div>

              <div>

                <p className="text-4xl font-black text-slate-900">
                  {totalUMKM}
                </p>

                <p className="text-sm text-slate-500">
                  UMKM Terdaftar
                </p>

              </div>

            </div>

          </div>

          {/* FOTO */}

          <div className="relative h-[560px] w-[560px] overflow-hidden rounded-[40px] border-8 border-white/20 shadow-2xl">

            <Image
              src="/images/hero.jpg"
              alt="UMKM Desa Sukodadi"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </div>

      {/* Wave */}

      <svg
        className="block w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F8FAFC"
          d="M0 96L80 90.7C160 85 320 75 480 85.3C640 96 800 128 960 128C1120 128 1280 96 1360 80L1440 64V160H1360C1280 160 1120 160 960 160C800 160 640 160 480 160C320 160 160 160 80 160H0V96Z"
        />
      </svg>

    </section>
  );
}