import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Calendar, User, ArrowLeft, Share2, Heart } from "lucide-react"

export default function BlogPostPage({ params }: { params: { id: string } }) {
    // Mock blog post data - in a real app, this would come from a database or CMS
  const post = {
    id: params.id,
    title: "Las mejores empresas de envío en Chile",
    content: `
      <p>Contratar a las mejores empresas de envío en Chile puede ser la diferencia entre el éxito y el fracaso de tu tienda online. En este artículo te contamos todo lo que necesitas saber para elegir el socio logístico perfecto.</p>
      
      <h2>¿Por qué es importante elegir bien tu empresa de envíos?</h2>
      <p>La logística es uno de los pilares fundamentales del ecommerce. Una mala experiencia de envío puede arruinar la percepción que tiene el cliente de tu marca, mientras que un servicio excelente puede convertir a un comprador ocasional en un cliente fiel.</p>
      
      <h2>Las mejores opciones en Chile</h2>
      <p>En Chile contamos con varias opciones de empresas de envío que se adaptan a diferentes necesidades y presupuestos:</p>
      
      <ul>
        <li><strong>Correos de Chile:</strong> La opción más tradicional y con cobertura nacional</li>
        <li><strong>Chilexpress:</strong> Líder en el mercado con excelente tracking</li>
        <li><strong>Starken:</strong> Ideal para envíos de mayor volumen</li>
        <li><strong>Blue Express:</strong> Competitivo en precios y tiempos</li>
      </ul>
      
      <h2>Factores a considerar</h2>
      <p>Al momento de elegir tu empresa de envíos, considera estos factores clave:</p>
      
      <ol>
        <li>Cobertura geográfica</li>
        <li>Tiempos de entrega</li>
        <li>Costos de envío</li>
        <li>Sistema de tracking</li>
        <li>Atención al cliente</li>
        <li>Integración con tu plataforma</li>
      </ol>
    `,
    image: "/ecommerce.jpg",
    date: "15 Nov 2024",
    author: "Equipo MP Riquelme",
    readTime: "5 min de lectura",
    tags: ["Logística", "Envíos", "Chile", "Ecommerce"],
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Pasos para crear un ecommerce en Chile",
      image: "/blog-details.jpg",
      date: "12 Nov 2024",
    },
    {
      id: 3,
      title: "Crear catálogo online en Chile fácilmente",
      image: "/blog-01.jpg",
      date: "10 Nov 2024",
    },
  ]

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

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartir
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Me gusta
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-green-600 hover:prose-a:text-green-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card
                key={relatedPost.id}
                className="border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={relatedPost.image || "/blog-02.jpg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{relatedPost.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-green-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Leer artículo
                      <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Listo para crear tu negocio online?</h2>
          <p className="text-xl text-green-100 mb-8">Aplica todo lo que has aprendido y comienza a vender hoy mismo</p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Prueba gratis por 15 dias
          </Button>
        </div>
      </section>
    </div>
  )
}
