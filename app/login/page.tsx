"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login gagal");
        return;
      }

      // Session disimpan otomatis di cookie oleh server (Supabase SSR)
      window.location.href = "/overview";
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan koneksi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:shadow-md lg:rounded-xl lg:border overflow-hidden">
          {/* Left Side - Form */}
          <div className="mx-auto w-full lg:p-10">
            <Link href="/" className="flex items-center mb-8">
              <Image
                className="w-10 h-10"
                src="/assets/images/logo.png"
                alt="Logo NexumAI"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-gray-900 ml-2">
                NexumAI
              </span>
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Senang Bertemu Lagi
              </h1>
              <p className="text-gray-600">
                Masuk untuk melanjutkan pertumbuhan bisnismu dengan NexumAI.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                id="email"
                type="email"
                placeholder="Masukkan emailmu"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />

              <input
                id="password"
                type="password"
                placeholder="Masukkan passwordmu"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <label htmlFor="remember" className="text-gray-600">
                    Ingat saya
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium"
              >
                Masuk
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              Belum punya akun?{" "}
              <Link href="/register" className="text-blue-600 font-medium">
                Daftar
              </Link>
            </p>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center justify-center h-full w-full">
            <Image
              src="/assets/images/login.jpg"
              alt="Login Illustration"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
