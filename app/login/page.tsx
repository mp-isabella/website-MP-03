import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 text-[20px] font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-[30px] text-green-700 font-semibold">MP Riquelme
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

      {/* Login Section */}
      <section className="min-h-screen bg-gray-50 flex">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <span className="text-3xl font-bold text-green-600">MP Riquelme</span>
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Bienvenid@</h2>
              <div className="w-16 h-1 bg-green-600 mx-auto mt-4"></div>
            </div>

            <Card className="border-2 border-green-200 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Tu contraseña"
                      className="w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" className="border-green-500 text-green-600" />
                      <label htmlFor="remember" className="text-sm text-gray-700">
                        Recuérdame
                      </label>
                    </div>
                    <Link href="#" className="text-sm text-green-600 hover:text-green-700">
                      ¿Te olvidaste tu contraseña?
                    </Link>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-full">
                    Ingresar
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">o</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-lg bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Iniciar sesión con Google
                  </Button>

                  <div className="text-center">
                    <span className="text-gray-600">¿Aún no te has registrado? </span>
                    <Link href="/registro" className="text-green-600 hover:text-green-700 font-medium">
                      Regístrate.
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side - Background Image */}
        <div className="hidden lg:block flex-1 relative">
          <Image
            src="/login.jpg"
            alt="Panadería con productos frescos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-20"></div>
        </div>
      </section>
    </div>
  )
}
