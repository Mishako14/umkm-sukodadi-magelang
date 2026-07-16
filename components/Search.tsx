"use client";

import { Search } from "lucide-react";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({
  value,
  onChange,
}: SearchProps) {
  return (
    <div className="mx-auto my-10 w-full max-w-3xl">

      <div className="group relative">

        <Search
          size={22}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-emerald-600"
        />

        <input
          type="text"
          placeholder="Cari nama UMKM atau kategori..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-full border border-slate-200 bg-white py-5 pl-16 pr-6 text-lg shadow-lg outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        />

      </div>

    </div>
  );
}