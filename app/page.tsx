import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Users,
  Star,
  Check,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function HomePage() {
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
      <section className="relative overflow-hidden bg-gray-50 h-[calc(100vh-96px)] flex items-center">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
          <div className="absolute top-32 left-20 w-2 h-2 bg-green-500 rounded-full opacity-80"></div>
          <div className="absolute top-16 left-32 w-3 h-3 bg-green-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-32 left-16 w-6 h-6 bg-green-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-8 w-3 h-3 bg-green-500 rounded-full opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  ¡Impulsa tu,{" "}
                  <span className="bg-green-600 text-white px-3 py-2 rounded-lg inline-block">
                    Negocio
                  </span>{" "}
                  al siguiente nivel!
                </h1>

                <div className="w-16 h-1 bg-green-600"></div>

                <p className="text-xl text-green-600 font-semibold">
                  Crea, vende, crece.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full"
              >
                Prueba 15 días gratis
              </Button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute top-16 -right-4 w-24 h-24 bg-green-500 opacity-30 transform rotate-45"></div>
              <div className="absolute -bottom-8 right-16 w-40 h-40 bg-green-300 rounded-full opacity-25"></div>
              <div className="absolute bottom-4 -right-8 w-20 h-20 bg-green-600 opacity-20 transform rotate-12"></div>

              <div className="absolute top-8 right-8 w-16 h-16 border-4 border-green-400 rounded-full opacity-40"></div>
              <div className="absolute -bottom-4 right-4 w-12 h-12 border-2 border-green-500 opacity-50 transform rotate-45"></div>

              <div className="relative z-10 bg-gray-200 rounded-xl overflow-hidden w-full max-w-md mx-auto aspect-square border-4 border-green-300 shadow-lg">
                <Image
                  src="/hero-image.svg"
                  alt="Personas sonrientes trabajando en su tienda online"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="absolute top-12 left-4 w-8 h-8 bg-green-400 rounded-full opacity-60 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-12 left-8 w-12 h-12 bg-green-500 rounded-full opacity-50 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para vender online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas profesionales para crear, gestionar y hacer crecer tu
              negocio digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Configuración Rápida
                </h3>
                <p className="text-gray-600">
                  Crea tu tienda en minutos con nuestro sistema intuitivo y
                  plantillas profesionales
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pagos Seguros
                </h3>
                <p className="text-gray-600">
                  Acepta pagos con total seguridad a través de múltiples métodos
                  de pago
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Diseño Responsive
                </h3>
                <p className="text-gray-600">
                  Tu tienda se verá perfecta en cualquier dispositivo, móvil,
                  tablet o desktop
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Analytics Avanzados
                </h3>
                <p className="text-gray-600">
                  Monitorea tus ventas y el comportamiento de tus clientes con
                  reportes detallados
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Soporte 24/7
                </h3>
                <p className="text-gray-600">
                  Nuestro equipo de expertos está disponible para ayudarte
                  cuando lo necesites
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  SEO Optimizado
                </h3>
                <p className="text-gray-600">
                  Mejora tu visibilidad en Google con herramientas SEO
                  integradas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Illustration */}
            <div className="relative">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Características
                  <br />
                  <span className="text-green-600">de tu tienda online</span>
                </h2>
                {/* Decorative elements */}
                <div className="absolute -top-4 right-8 w-8 h-1 bg-green-400 transform rotate-12"></div>
                <div className="absolute -top-2 right-12 w-6 h-1 bg-green-500 transform rotate-45"></div>
                <div className="absolute -top-6 right-16 w-4 h-1 bg-green-300 transform rotate-12"></div>
              </div>

              {/* Phone illustration */}
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-green-500 rounded-full transform scale-110 opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400 rounded-full opacity-30"></div>

                {/* Phone mockup */}
                <div className="relative z-10 bg-gray-800 rounded-3xl p-2 mx-auto w-64 h-96 shadow-2xl">
                  <div className="bg-white rounded-2xl h-full p-4 flex flex-col">
                    <div className="flex-1 bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                      <div className="text-center">
                        <ShoppingCart className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <div className="space-y-2">
                          <div className="h-3 bg-green-200 rounded w-20 mx-auto"></div>
                          <div className="h-3 bg-green-100 rounded w-16 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <div className="absolute top-8 -right-6 w-10 h-10 bg-green-200 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="h-5 w-5 text-green-700" />
                </div>
                <div className="absolute -bottom-2 -left-8 w-14 h-14 bg-green-300 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-7 w-7 text-green-800" />
                </div>
                <div className="absolute bottom-12 -right-8 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Right Content - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Diseñado para
                  </h3>
                  <p className="text-sm text-gray-600">
                    todos los dispositivos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Conecta tu propio
                  </h3>
                  <p className="text-sm text-gray-600">dominio</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Botón de</h3>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Enlaces a
                  </h3>
                  <p className="text-sm text-gray-600">redes sociales</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Recomendación de
                  </h3>
                  <p className="text-sm text-gray-600">
                    productos relacionados
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Registro de usuarios
                  </h3>
                  <p className="text-sm text-gray-600">para tus clientes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Notificaciones
                  </h3>
                  <p className="text-sm text-gray-600">por email</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Crear cupones
                  </h3>
                  <p className="text-sm text-gray-600">de descuento</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Recuperación de
                  </h3>
                  <p className="text-sm text-gray-600">carritos abandonados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Planes que se adaptan a tu negocio
            </h2>
            <p className="text-xl text-gray-600">
              Comienza gratis y escala según crezca tu tienda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Plan Inicial
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $99.000
                  </div>
                  <p className="text-gray-600">Para empezar</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Página web básica</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Configuración de redes sociales</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Soporte por email</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Comenzar Plan
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Más popular
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Profesional</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $179.000 
                  </div>
                  <p className="text-gray-600">por mes</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Sitio web profesional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Dominio personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Estrategia SEO</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Automatización de tareas</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Prueba 15 días gratis
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Plan Corporativo
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $299.000 
                  </div>
                  <p className="text-gray-600">por mes</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Consultoría estratégica</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Desarrollo a medida</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Integraciones avanzadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Soporte dedicado</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Contactar ventas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu negocio digital?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Únete a miles de emprendedores que ya están vendiendo con MP Riquelme
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Crear mi pagina web
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg bg-transparent"
            >
              Ver demo
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
                  <Twitter className="h-6 w-6" />
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
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    API
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
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">mpriquelme@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">+56 9 85714993</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-400 mt-1" />
                  <span className="text-gray-300">
                    Chillán, Chile
                  </span>
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
                <Link
                  href="#"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
