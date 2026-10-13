'use client';

import { useState, useRef, useEffect } from 'react';
import AIMessageRenderer from './AIMessageRenderer';

interface ChatMessage {
    role: 'user' | 'bot';
    content: string;
}

export default function FloatingChatBot() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: 'bot',
            content:
                'Tanyakan apa pun seputar fitur, cara kerja, dan penggunaan NexumAI di sini!!',
        },
    ]);

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
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/chatbot`, {
                method: 'POST',
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

            const botReply = data?.answer ||
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

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {open && (
                <div className="mb-4 w-[90%] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-robot text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">
                                    NexumAI Assistant
                                </h4>
                                <p className="text-blue-100 text-xs">
                                    Siap membantu bisnismu
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-white/70 hover:text-white"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="h-72 overflow-y-auto p-4 bg-gray-50 space-y-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex gap-2 ${msg.role === 'user'
                                    ? 'justify-end'
                                    : 'justify-start'
                                    }`}
                            >
                                {msg.role === 'bot' && (
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fa-solid fa-robot text-white text-sm"></i>
                                    </div>
                                )}

                                <div
                                    className={`p-3 shadow-sm max-w-xs text-sm rounded-2xl ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 rounded-tl-none'
                                        }`}
                                >
                                    {/* ⭐ Ganti dengan component renderer */}
                                    {msg.role === 'bot' ? (
                                        <AIMessageRenderer content={msg.content} />
                                    ) : (
                                        msg.content
                                    )}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="text-sm text-gray-400">
                                NexumAI sedang mengetik...
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') sendMessage();
                                }}
                                placeholder="Ketik pertanyaanmu..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={loading}
                                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
                            >
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
            >
                <i className="fa-solid fa-robot text-2xl"></i>
            </button>
        </div>
    );
}