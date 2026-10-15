'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  // Enlaces de navegación estructurados
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/catalog' },
    { name: 'Nosotros', href: '/about' },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Marca */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
          <div className="relative w-15 h-8">
            <Image 
              src="/UIX/Logo-Arq-black.png" 
              alt="Logo Arqkalar" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          <span>Arqkalar<span className="text-blue-600">.</span></span>
        </Link>

        {/* Navegación Principal con efecto activo minimalista */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
                
                {/* Indicador / Subrayado minimalista para la ruta activa */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Acciones: Botón Contáctanos */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20 active:scale-95"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </header>
  );
}