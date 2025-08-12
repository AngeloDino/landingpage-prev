import React, { useState } from 'react';
import { Menu, X, Star, Shield, Zap, Phone, Mail, MapPin } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">TuNegocio</h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contacto
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Contacto
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Impulsa tu negocio
              <span className="block text-blue-200">hoy mismo</span>
            </h2>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transformamos ideas en resultados reales. Aumenta tus ventas, mejora tu presencia digital 
              y conecta con más clientes que nunca antes.
            </p>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Comenzar Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos expertos en hacer crecer negocios como el tuyo. Con más de 5 años de experiencia, 
              hemos ayudado a cientos de empresas a alcanzar sus objetivos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Resultados Comprobados</h4>
              <p className="text-gray-600">
                Más del 95% de nuestros clientes ven resultados en los primeros 30 días.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Confianza Total</h4>
              <p className="text-gray-600">
                Trabajamos con transparencia y garantizamos la satisfacción de nuestros clientes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Implementación Rápida</h4>
              <p className="text-gray-600">
                Comenzamos a trabajar inmediatamente y verás cambios desde el primer día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas para hacer crecer tu negocio de manera sostenible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Marketing Digital</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aumenta tu visibilidad online con estrategias de marketing digital personalizadas. 
                Redes sociales, publicidad y posicionamiento web que realmente funcionan.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Gestión de redes sociales</li>
                <li>• Campañas publicitarias</li>
                <li>• SEO y posicionamiento</li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Consultoría Empresarial</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Optimiza tus procesos y mejora la rentabilidad de tu empresa. 
                Te ayudamos a identificar oportunidades y implementar mejoras efectivas.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Análisis de procesos</li>
                <li>• Estrategias de crecimiento</li>
                <li>• Optimización de costos</li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Desarrollo Web</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Crea una presencia digital profesional con sitios web modernos y funcionales. 
                Diseños responsivos que convierten visitantes en clientes.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Sitios web responsivos</li>
                <li>• Tiendas online</li>
                <li>• Aplicaciones web</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para hacer crecer tu negocio?
          </h3>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            No esperes más. Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos. 
            La consulta inicial es completamente gratuita.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="text-blue-600" size={24} />
              <span className="text-gray-700">+57 300 123 4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="text-blue-600" size={24} />
              <span className="text-gray-700">hola@tunegocio.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="text-blue-600" size={24} />
              <span className="text-gray-700">Manizales, Colombia</span>
            </div>
          </div>

          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>Escribir por WhatsApp</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl font-bold mb-4">TuNegocio</h4>
          <p className="text-gray-400 mb-4">
            Impulsando el crecimiento de empresas desde 2019
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 TuNegocio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
