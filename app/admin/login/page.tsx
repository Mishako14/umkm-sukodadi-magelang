"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Login berhasil!");

      router.push("/admin/dashboard");
    } catch (error: any) {
      toast.error("Email atau password salah!");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-green-700">
          Login Admin
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Silakan masuk untuk mengelola data UMKM.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-6 w-full rounded-lg border border-gray-300 p-3 text-black focus:border-green-600 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full rounded-lg border border-gray-300 p-3 text-black focus:border-green-600 focus:outline-none"
        />

        <button
          onClick={handleLogin}
          className="mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Login
        </button>

        <Link
          href="/"
          className="mt-4 block text-center text-green-700 transition hover:underline"
        >
          ← Kembali ke Beranda
        </Link>

      </div>
    </main>
  );
}