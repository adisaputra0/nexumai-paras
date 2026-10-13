'use client';

import { useEffect } from 'react';

export default function NavbarEffects() {
    useEffect(() => {
        const navbar = document.querySelector('nav');
        const navA = document.querySelectorAll('nav a');
        const navLiA = document.querySelectorAll('nav li a');
        const navMM = document.getElementById('mobile-menu-btn');

        const onScroll = () => {
            if (!navbar || !navMM) return;

            if (window.scrollY > 10) {
                navbar.classList.add(
                    'bg-white',
                    'backdrop-blur-md',
                    'text-black',
                    'border-gray-200/100'
                );

                navA.forEach(link =>
                    link.classList.add('text-gray-700')
                );
                navLiA.forEach(link =>
                    link.classList.add('hover:text-gray-950')
                );

                navMM.classList.add('text-gray-800');
                navMM.classList.remove('text-gray-50');
            } else {
                navbar.classList.remove(
                    'bg-white',
                    'backdrop-blur-md',
                    'text-black',
                    'border-gray-200/100'
                );

                navA.forEach(link =>
                    link.classList.remove('text-gray-700')
                );
                navLiA.forEach(link =>
                    link.classList.remove('hover:text-gray-950')
                );

                navMM.classList.add('text-gray-50');
                navMM.classList.remove('text-gray-800');
            }
        };

        window.addEventListener('scroll', onScroll);
        onScroll(); // run once on mount

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return null;
}
