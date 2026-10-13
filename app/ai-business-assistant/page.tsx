'use client';

import { useState, useRef, useEffect } from 'react';
import Sidebar from "@/app/components/Sidebar";
import AuthGuard from "@/app/components/AuthGuard";
import AIMessageRenderer from "@/app/components/AIMessageRenderer";

interface ChatMessage {
    role: 'user' | 'bot';
    content: string;
}

export default function Page() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const userMessage = message;

        setMessages((prev) => [
            ...prev,
            { role: 'user', content: userMessage },
        ]);

        setMessage('');
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/ai-business-assistant`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: userMessage,
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();

            const botReply = data?.generated_text ||
                'Maaf, tidak ada response dari AI.';

            setMessages((prev) => [
                ...prev,
                { role: 'bot', content: botReply.trim() },
            ]);
        } catch (error) {
            console.error('Error:', error);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'bot',
                    content: 'Server tidak merespon. Pastikan backend aktif.',
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSuggestionClick = (suggestionText: string) => {
        setMessage(suggestionText);
    };

    return (
        <AuthGuard>
            <div className="relative flex overflow-hidden max-w-[1440px] mx-auto">

                {/* Sidebar */}
                <Sidebar />

                {/* Empty */}
                <aside className="w-80 hidden md:flex">
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-hidden h-screen flex flex-col pt-16">
                    {/* Chat Container */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Chat Messages */}
                        <div
                            id="chatMessages"
                            className="flex-1 overflow-y-auto p-8 space-y-6
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          [&::-webkit-scrollbar-thumb]:rounded-full"
                        >
                            {/* Welcome - Only show when no messages */}
                            {messages.length === 0 && (
                                <div className="flex justify-center">
                                    <div className="max-w-2xl text-center">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <i className="fa-solid fa-robot text-blue-600 text-2xl" />
                                        </div>

                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            Halo! Bisnismu lagi butuh bantuan apa hari ini?
                                        </h2>
                                        <p className="text-gray-500 mb-8">
                                            Mau tanya apa aja soal strategi bisnis, marketing, operasional, atau growth? Gas!
                                        </p>

                                        {/* Quick Suggestions */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                                            {[
                                                {
                                                    icon: "fa-chart-line",
                                                    title: "Gimana cara ningkatin penjualan?",
                                                    desc: "Dapetin strategi buat naikin omzet",
                                                },
                                                {
                                                    icon: "fa-users",
                                                    title: "Ide marketing buat UMKM",
                                                    desc: "Strategi marketing murah tapi efektif",
                                                },
                                                {
                                                    icon: "fa-money-bill-trend-up",
                                                    title: "Ngatur keuangan bisnis",
                                                    desc: "Tips biar arus kas makin lancar",
                                                },
                                                {
                                                    icon: "fa-store",
                                                    title: "Go online, jualan makin luas",
                                                    desc: "Panduan transformasi digital",
                                                },
                                            ].map((item, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleSuggestionClick(item.title)}
                                                    className="text-left p-4 bg-white border border-gray-200 rounded-xl
                    hover:border-blue-600 hover:shadow-md transition-all group"
                                                >
                                                    <div className="flex items-start">
                                                        <i
                                                            className={`fa-solid ${item.icon} text-blue-600 mt-1 mr-3`}
                                                        />
                                                        <div>
                                                            <p className="font-medium text-gray-900 group-hover:text-blue-600">
                                                                {item.title}
                                                            </p>
                                                            <p className="text-sm text-gray-500 mt-1">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Chat Messages */}
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-3 ${msg.role === 'user'
                                        ? 'justify-end'
                                        : 'justify-start'
                                        }`}
                                >
                                    {msg.role === 'bot' && (
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="fa-solid fa-robot text-blue-600"></i>
                                        </div>
                                    )}

                                    <div
                                        className={`p-4 shadow-sm max-w-3xl rounded-2xl ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-white text-gray-800 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.role === 'bot' ? (
                                            <AIMessageRenderer content={msg.content} />
                                        ) : (
                                            msg.content
                                        )}
                                    </div>

                                    {msg.role === 'user' && (
                                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <i className="fa-solid fa-user text-white"></i>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {loading && (
                                <div className="flex gap-3 justify-start">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-robot text-blue-600"></i>
                                    </div>
                                    <div className="p-4 bg-white rounded-2xl rounded-tl-none shadow-sm">
                                        <div className="text-gray-400">
                                            NexumAI sedang mengetik...
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat Input */}
                        <div className="bg-white p-6">
                            <div className="max-w-4xl mx-auto">
                                <div className="flex items-end gap-3 flex-col md:flex-row">
                                    <div className="flex-1 w-full relative flex">
                                        <textarea
                                            id="chatInput"
                                            rows={1}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    sendMessage();
                                                }
                                            }}
                                            placeholder="Tanya soal bisnismu di sini…"
                                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none
                  [&::-webkit-scrollbar]:w-1
                  [&::-webkit-scrollbar-track]:bg-gray-100
                  [&::-webkit-scrollbar-thumb]:bg-gray-300
                  [&::-webkit-scrollbar-thumb]:rounded-full"
                                        />
                                    </div>

                                    <button
                                        id="sendButton"
                                        onClick={sendMessage}
                                        disabled={loading}
                                        className="w-full md:w-max bg-blue-600 text-white px-6 py-3 rounded-xl
                font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md
                flex justify-center items-center gap-2 disabled:opacity-50"
                                    >
                                        <span>Send</span>
                                        <i className="fa-solid fa-paper-plane" />
                                    </button>
                                </div>

                                <p className="text-xs text-gray-400 mt-2 text-center">
                                    AI bisa salah, jadi pastikan info penting tetap kamu cek lagi ya
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </AuthGuard>
    );
}