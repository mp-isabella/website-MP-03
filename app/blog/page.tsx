import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Calendar, ArrowRight, User } from "lucide-react";

export default function BlogPage() {
  const recentPosts = [
    {
      id: 1,
      title: "Las mejores empresas de envío en Chile",
      description:
        "Contratar a las mejores empresas de envío en Chile puede ser la diferencia en...",
      image: "/reciente1.jpg",
      date: "15 Nov 2024",
      author: "Equipo MPR",
    },
    {
      id: 2,
      title: "Pasos para crear un ecommerce en Chile",
      description:
        "Recuerda que estos son solo los iniciales pasos para crear un ecommerce en Ch...",
      image: "/reciente2.jpg",
      date: "12 Nov 2024",
      author: "Equipo MPR",
    },
    {
      id: 3,
      title: "Crear catálogo online en Chile fácilmente con MPRiquelme",
      description:
        "Crear catálogo online en chile fácilmente con MP Riquelme no solamente te perm...",
      image: "/reciente3.jpg",
      date: "10 Nov 2024",
      author: "Equipo MPR",
    },
  ];

  const publications = [
    {
      id: 4,
      title: "Cómo optimizar tu tienda online para móviles",
      description:
        "Descubre las mejores prácticas para que tu tienda se vea perfecta en dispositivos móviles...",
      image: "/public1.jpg",
      date: "8 Nov 2024",
      author: "Equipo MPR",
    },
    {
      id: 5,
      title: "Estrategias de marketing digital para ecommerce",
      description:
        "Aprende las técnicas más efectivas para promocionar tu tienda online y aumentar ventas...",
      image: "/public2.jpg",
      date: "5 Nov 2024",
      author: "Equipo MPR",
    },
    {
      id: 6,
      title: "Gestión de inventario para tiendas online",
      description:
        "Mantén control total de tu inventario con estas herramientas y consejos prácticos...",
      image: "/public3.jpg",
      date: "3 Nov 2024",
      author: "Equipo MPR",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 text-[20px] font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-[30px] text-green-700 font-semibold">
                  MP Riquelme
                </span>
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#precios"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Precios
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Contacto
              </Link>
            </nav>

            {/* Botón */}
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-[20px] bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 shadow-md transition-all duration-200"
              >
                <Link href="/login">Inicia sesión</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Blog de <span className="text-green-600">MP Riquelme</span>
          </h1>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre consejos, guías y las últimas tendencias para hacer crecer
            tu negocio online
          </p>
        </div>
      </section>

      {/* Lo más reciente Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lo más reciente
            </h2>
            <div className="w-16 h-1 bg-green-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Nuevo
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Leer más
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publicaciones Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Publicaciones
            </h2>
            <div className="w-16 h-1 bg-green-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((post) => (
              <Card
                key={post.id}
                className="border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Leer más
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Mantente al día con nuestro blog
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Recibe los últimos consejos y novedades directamente en tu correo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-400">
                  MP Riquelme
                </span>
                <ShoppingCart className="h-6 w-6 text-green-400" />
              </div>
              <p className="text-gray-300">
                La plataforma más solicitada para crear tu pagina web profesional y listos para comenzar a vender en minutos.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Producto</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Características
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Integraciones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Soporte</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Tutoriales
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Blog</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Últimas publicaciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Guías de ecommerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Casos de éxito
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 MP Riquelme. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  Términos de servicio
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
