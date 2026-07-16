"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Store, LayoutDashboard, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 text-white shadow-lg">
            <Store size={24} />
          </div>

          <div>

            <h1
              className={`text-xl font-black transition ${
                scrolled
                  ? "text-slate-900"
                  : "text-white"
              }`}
            >
              UMKM Sukodadi
            </h1>

            <p
              className={`text-sm transition ${
                scrolled
                  ? "text-emerald-600"
                  : "text-emerald-100"
              }`}
            >
              Digitalisasi UMKM
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="/"
            className={`font-semibold transition ${
              scrolled
                ? "text-slate-700 hover:text-emerald-600"
                : "text-white hover:text-emerald-200"
            }`}
          >
            Beranda
          </a>

          <a
            href="#about"
            className={`font-semibold transition ${
              scrolled
                ? "text-slate-700 hover:text-emerald-600"
                : "text-white hover:text-emerald-200"
            }`}
          >
            Tentang
          </a>

          <a
            href="#umkm"
            className={`font-semibold transition ${
              scrolled
                ? "text-slate-700 hover:text-emerald-600"
                : "text-white hover:text-emerald-200"
            }`}
          >
            UMKM
          </a>

          <Link
            href="/admin/login"
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            <LayoutDashboard size={18} />
            Login Admin
          </Link>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">

          <div className="flex flex-col p-6">

            <a
              href="/"
              className="py-3 font-semibold text-slate-700"
            >
              Beranda
            </a>

            <a
              href="#about"
              className="py-3 font-semibold text-slate-700"
            >
              Tentang
            </a>

            <a
              href="#umkm"
              className="py-3 font-semibold text-slate-700"
            >
              UMKM
            </a>

            <Link
              href="/admin/login"
              className="mt-4 rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white"
            >
              Login Admin
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}