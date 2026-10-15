import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido Principal de la Landing / Tienda */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center py-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Bienvenido a <span className="text-indigo-600">Arqkalar</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestro catálogo exclusivo o gestiona tus productos desde el panel de control.
          </p>
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}