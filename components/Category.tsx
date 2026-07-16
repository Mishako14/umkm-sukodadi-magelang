export default function Category() {
    const kategori = [
      "🍘 Makanan",
      "☕ Minuman",
      "🧵 Kerajinan",
      "🌾 Pertanian",
      "🧴 Jasa",
      "🍯 Produk Lokal",
    ];
  
    return (
      <section className="mx-auto max-w-7xl px-6 py-10">
  
        <h2 className="mb-6 text-3xl font-bold">
          Kategori
        </h2>
  
        <div className="flex flex-wrap gap-4">
  
          {kategori.map((item) => (
            <button
              key={item}
              className="rounded-full bg-green-100 px-6 py-3 hover:bg-green-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}
  
        </div>
  
      </section>
    );
  }