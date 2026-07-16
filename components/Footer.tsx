import Link from "next/link";
import {
  Store,
  MapPin,
  GraduationCap,
  Heart,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-slate-900 text-white">

      {/* Blur */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">

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