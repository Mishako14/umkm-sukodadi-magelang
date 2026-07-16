"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type Props = {
  data: any[];
};

export default function DashboardPieChart({
  data,
}: Props) {

  const kategoriCount: Record<string, number> = {};

  data.forEach((item) => {
    const kategori = item.kategori || "Lainnya";

    kategoriCount[kategori] =
      (kategoriCount[kategori] || 0) + 1;
  });

  const chartData = {
    labels: Object.keys(kategoriCount),

    datasets: [
      {
        data: Object.values(kategoriCount),

        backgroundColor: [
          "#16a34a",
          "#2563eb",
          "#f59e0b",
          "#dc2626",
          "#9333ea",
          "#14b8a6",
        ],

        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Distribusi Kategori UMKM
      </h2>

      <div className="mx-auto max-w-sm">
        <Pie data={chartData} />
      </div>

    </div>
  );
}