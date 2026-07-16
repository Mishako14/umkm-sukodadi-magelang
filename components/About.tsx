import Image from "next/image";

export default function About() {
  return (
    <section
  id="about"
  className="bg-white py-20"
>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Kiri */}
        <div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Tentang Website
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Digitalisasi UMKM Desa Sukodadi
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Website ini dikembangkan sebagai media informasi dan promosi
            UMKM Desa Sukodadi, Kecamatan Bandongan, Kabupaten Magelang.
            Melalui platform ini, masyarakat dapat mengenal berbagai
            produk unggulan UMKM sekaligus memperoleh informasi mengenai
            lokasi usaha serta kontak pelaku UMKM.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Pengembangan website ini merupakan bagian dari program kerja
            mahasiswa <b>KKN GIAT 16 Universitas Negeri Semarang</b> dalam
            mendukung transformasi digital UMKM agar memiliki jangkauan
            promosi yang lebih luas dan mampu meningkatkan daya saing
            produk lokal.
          </p>

          <a
            href="#umkm"
            className="mt-8 inline-block rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
          >
            Lihat Daftar UMKM →
          </a>

        </div>

        {/* Kanan */}
        <div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/desa.jpg"
              alt="UMKM Desa Sukodadi"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

      {/* Keunggulan */}
      <div className="mx-auto mt-20 grid max-w-7xl gap-8 px-6 md:grid-cols-3">

        <div className="rounded-2xl bg-green-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="text-5xl">📦</div>

          <h3 className="mt-5 text-2xl font-bold text-gray-900">
            Informasi UMKM
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Menampilkan profil UMKM beserta kategori usaha, deskripsi,
            dan informasi yang mudah diakses oleh masyarakat.
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="text-5xl">📱</div>

          <h3 className="mt-5 text-2xl font-bold text-gray-900">
            Hubungi Langsung
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Pengunjung dapat menghubungi pelaku UMKM secara langsung
            melalui WhatsApp untuk memperoleh informasi maupun melakukan
            pemesanan produk.
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="text-5xl">🗺️</div>

          <h3 className="mt-5 text-2xl font-bold text-gray-900">
            Lokasi Usaha
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Setiap UMKM dilengkapi dengan tautan Google Maps sehingga
            memudahkan masyarakat menemukan lokasi usaha secara langsung.
          </p>
        </div>

      </div>
    </section>
  );
}