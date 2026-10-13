'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    remember: boolean;
}

export default function Register() {
    const [formData, setFormData] = useState<RegisterFormData>({
        email: '',
        password: '',
        confirmPassword: '',
        remember: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Password tidak sama");
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
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
                throw new Error(data.message || "Gagal register");
            }

            alert("Register berhasil!");
            console.log("User:", data);

            // Optional: redirect ke login
            window.location.href = "/login";

        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full">
                <div className="grid lg:grid-cols-2 items-center lg:shadow-md lg:rounded-xl lg:border overflow-hidden">

                    {/* Left Side - Form */}
                    <div className="w-full lg:p-10">

                        <Link href="/" className="flex items-center mb-8">
                            <Image
                                className="w-10 h-10"
                                src="/assets/images/logo.png"
                                alt="Logo NexumAI"
                                width={40}
                                height={40}
                            />
                            <span className="text-xl font-bold text-gray-900 ml-2">NexumAI</span>
                        </Link>

                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Bangun Bisnis Pintar Bersama Kami
                            </h1>
                            <p className="text-gray-600">
                                Buat akun NexumAI-mu dan rasakan AI yang paham kebutuhan bisnismu.
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

                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Konfirmasi passwordmu"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium"
                            >
                                Daftar
                            </button>
                        </form>

                        <p className="text-center text-gray-600 text-sm mt-6">
                            Sudah punya akun?{' '}
                            <Link href="/login" className="text-blue-600 font-medium">
                                Masuk
                            </Link>
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center justify-center h-full w-full">
                        <Image
                            src="/assets/images/register.jpg"
                            alt="Register Illustration"
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
