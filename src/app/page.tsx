'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Play, CheckCircle, TrendingUp, Target, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/navigation'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Strategi Branding",
      description: "Membangun identitas brand yang kuat dan konsisten di berbagai platform digital."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: "Digital Marketing",
      description: "Solusi pemasaran digital terpadu untuk meningkatkan visibilitas dan reach bisnis Anda."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-gold" />,
      title: "Konten Kreatif",
      description: "Produksi konten visual dan tulisan yang menarik dan relevan dengan target audiens."
    }
  ]

  const achievements = [
    { number: "100+", label: "Klien Puas" },
    { number: "500+", label: "Proyek Selesai" },
    { number: "10+", label: "Tahun Pengalaman" },
    { number: "50+", label: "Penghargaan" }
  ]

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-white to-gold/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
                Solusi Periklanan &
                <span className="block text-gold">Kreatif Terpadu</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Perusahaan yang fokus membuat, mengelola, dan mengeksekusi kegiatan promosi untuk klien. 
                Kami bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun 
                brand yang kuat, modern, dan relevan di era digital.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-full"
                >
                  Hubungi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-navy text-navy hover:bg-navy hover:text-white text-lg px-8 py-6 rounded-full"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Lihat Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-navy rounded-full flex justify-center">
            <div className="w-1 h-3 bg-navy rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengan tim kreatif berpengalaman, kami menghadirkan layanan berbasis data, 
              kreatif, dan disesuaikan dengan kebutuhan klien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Mengapa Memilih FISHNESIA?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PT FISHNESIA MITRA BERSAMA adalah perusahaan yang bergerak di bidang jasa periklanan 
                dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan 
                di era digital.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kami menyediakan solusi pemasaran terpadu yang dirancang untuk membantu bisnis 
                meningkatkan visibilitas, menarik perhatian audiens, dan mencapai hasil yang terukur.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tim kreatif berpengalaman lebih dari 10 tahun</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Strategi berbasis data dan analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Solusi terintegrasi untuk semua kebutuhan marketing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Hasil terukur dan ROI yang transparan</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 bg-navy text-white">
                  <CardContent className="p-0">
                    <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm md:text-base">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Meningkatkan Brand Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mari diskusikan kebutuhan marketing dan branding Anda dengan tim profesional kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-full"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-6 rounded-full"
            >
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">
                FISHNESIA
              </h3>
              <p className="text-gray-400">
                Solusi periklanan dan kreatif terpadu untuk kesuksesan brand Anda.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Strategi Branding</li>
                <li>Digital Marketing</li>
                <li>Konten Kreatif</li>
                <li>Media Planning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>0823-8246-6378</li>
                <li>info@fishnesia.com</li>
                <li>Surabaya, Jawa Timur</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Alamat</h4>
              <p className="text-gray-400">
                Jl. Rungkut Industri III No.75<br />
                Rungkut Tengah, Kec. Gn. Anyar<br />
                Surabaya, Jawa Timur
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT FISHNESIA MITRA BERSAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}