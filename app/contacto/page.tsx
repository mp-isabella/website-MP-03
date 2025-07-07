import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
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

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Mantengamos
                  <br />
                  el <span className="text-green-600">contacto</span>
                </h1>
                <div className="w-16 h-1 bg-green-600 mb-6"></div>
                <p className="text-lg text-gray-600 mb-8">
                  No dudes en escribirnos si tienes cualquier duda o sugerencia.
                  <br />
                  Nos alegra mantener contacto contigo.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">
                    mpriquelme.dev@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">+56 9 85714993</span>
                </div>
              </div>

              {/* Phone Illustration */}
              <div className="relative max-w-md mx-auto lg:mx-0 mt-12">
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 transform scale-110"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500 rounded-full opacity-30"></div>
                <div className="relative z-10 flex items-center justify-center h-64">
                  <div className="relative">
                    {/* Phone base */}
                    <div className="w-32 h-8 bg-green-100 rounded-full"></div>
                    {/* Phone body */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    {/* Phone cord */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-green-500"></div>
                    {/* Decorative elements */}
                    <div className="absolute -top-16 -right-8 w-4 h-4 bg-green-300 rounded-full"></div>
                    <div className="absolute -top-20 right-4 w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="absolute -top-12 -left-6 w-3 h-3 bg-green-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div>
              <Card className="border-2 border-green-200 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nombre
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre y apellido"
                        className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu número telefónico"
                        className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        ¿Cómo te podemos ayudar?
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Coméntanos brevemente cualquier duda o sugerencia"
                        className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded text-sm">
                        protección de reCAPTCHA
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-full">
                      Enviar →
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-400">
                  MP Riquelme
                </span>
                <ShoppingCart className="h-6 w-6 text-green-400" />
              </div>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Attention */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Atención:</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal:</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Aviso legal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                Suscríbete a nuestro newsletter:
              </h3>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nombre"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
