'use client';

import { Dispatch, SetStateAction } from 'react';

type SubscribeModalProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SubscribeModal({ open, setOpen }: SubscribeModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative bg-gradient-to-br from-[#15132a] to-[#1b1840] rounded-3xl p-8 max-w-md w-full border border-blue-500/30 shadow-2xl transform transition-all">
                {/* Close Button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-8 right-8 text-blue-200/50 hover:text-white transition"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center border-2 border-blue-500/40">
                        <i className="fas fa-check text-4xl text-blue-400"></i>
                    </div>
                </div>

                {/* Content */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Berhasil Berlangganan!
                    </h2>
                    <p className="text-blue-200/70 mb-6 leading-relaxed">
                        Kamu sudah berhasil berlangganan newsletter kami.
                        Nantinya kamu akan menerima update terbaru seputar AI
                        dan tips bisnis untuk UMKM.
                    </p>
                    <button
                        onClick={() => setOpen(false)}
                        className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-3 rounded-full font-medium"
                    >
                        Oke, Siap!
                    </button>
                </div>
            </div>
        </div>
    );
}
