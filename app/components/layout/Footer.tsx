import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-lg font-bold text-white tracking-wide">
            Arqkalar
          </span>
          <p className="text-sm text-gray-400 mt-1">
            Plataforma digital para venta y exhibición de catálogo.
          </p>
        </div>

        <div className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <Link href="/catalog" className="hover:text-white transition-colors">
            Catálogo
          </Link>
          <Link href="/admin" className="hover:text-white transition-colors">
            Administración
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Arqkalar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}