import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Marca / Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Arqkalar<span className="text-indigo-600">.</span>
        </Link>

        {/* Navegación Principal */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Inicio
          </Link>
          <Link href="/catalog" className="hover:text-indigo-600 transition-colors">
            Catálogo
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            Nosotros
          </Link>
        </nav>

        {/* Acciones / Panel de Control */}
        <div className="flex items-center space-x-4">
          <Link
            href="/admin"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Panel Control
          </Link>
          <Link
            href="/catalog"
            className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Ver Tienda
          </Link>
        </div>
      </div>
    </header>
  );
}