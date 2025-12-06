'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Eye, Calendar, Tag, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/navigation'

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'branding', name: 'Branding' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'content-creation', name: 'Content Creation' },
    { id: 'video-production', name: 'Video Production' }
  ]

  const projects = [
    {
      id: 1,
      title: "Rebranding Bank Syariah Indonesia",
      category: "branding",
      client: "Bank Syariah Indonesia",
      year: "2024",
      description: "Transformasi lengkap identitas visual dan strategi branding untuk bank syariah terbesar di Indonesia. Meliputi logo, corporate identity, marketing materials, dan digital presence.",
      image: "/api/placeholder/600/400",
      tags: ["Branding", "Logo Design", "Corporate Identity", "Digital"],
      results: [
        "300% peningkatan brand awareness",
        "150% pertumbuhan engagement digital",
        "Top 3 brand recognition di industri perbankan syariah"
      ]
    },
    {
      id: 2,
      title: "Digital Campaign Gojek",
      category: "digital-marketing",
      client: "Gojek",
      year: "2024",
      description: "Kampanye digital terintegrasi untuk peluncuran fitur baru GoFood dengan pendekatan multi-platform dan influencer marketing.",
      image: "/api/placeholder/600/400",
      tags: ["Digital Campaign", "Social Media", "Influencer Marketing", "Content Strategy"],
      results: [
        "2.5M+ impressions dalam 1 bulan",
        "45% increase in app downloads",
        "89% positive sentiment rate"
      ]
    },
    {
      id: 3,
      title: "Social Media Management Telkomsel",
      category: "social-media",
      client: "Telkomsel",
      year: "2023",
      description: "Manajemen social media comprehensive untuk meningkatkan engagement dan brand loyalty di platform Instagram, Twitter, dan TikTok.",
      image: "/api/placeholder/600/400",
      tags: ["Social Media", "Community Management", "Content Creation", "Analytics"],
      results: [
        "500K+ followers growth",
        "200% increase in engagement rate",
        "Best Social Media Campaign 2023"
      ]
    },
    {
      id: 4,
      title: "Content Strategy Unilever",
      category: "content-creation",
      client: "Unilever Indonesia",
      year: "2023",
      description: "Pengembangan strategi konten untuk 15 brand portfolio dengan pendekatan data-driven dan creative storytelling.",
      image: "/api/placeholder/600/400",
      tags: ["Content Strategy", "Creative Writing", "Visual Design", "Brand Storytelling"],
      results: [
        "85% improvement in content performance",
        "3M+ content views monthly",
        "Industry benchmark for engagement"
      ]
    },
    {
      id: 5,
      title: "Video Production Series A",
      category: "video-production",
      client: "Series A Startup",
      year: "2023",
      description: "Produksi video company profile dan testimonial untuk startup Series A yang akan melakukan fundraising.",
      image: "/api/placeholder/600/400",
      tags: ["Video Production", "Corporate Video", "Testimonial", "Fundraising"],
      results: [
        "Successfully raised $10M Series B",
        "500K+ video views",
        "Featured in TechCrunch"
      ]
    },
    {
      id: 6,
      title: "Brand Activation Event",
      category: "branding",
      client: "Major Retail Chain",
      year: "2023",
      description: "Activasi brand dan event launching untuk retail chain dengan 50+ lokasi di seluruh Indonesia.",
      image: "/api/placeholder/600/400",
      tags: ["Event Marketing", "Brand Activation", "Local Marketing", "PR"],
      results: [
        "200K+ event attendees",
        "45% increase in store traffic",
        "National media coverage"
      ]
    },
    {
      id: 7,
      title: "E-commerce Launch Campaign",
      category: "digital-marketing",
      client: "Fashion E-commerce",
      year: "2023",
      description: "Kampanye peluncuran platform e-commerce fashion dengan strategi omnichannel marketing.",
      image: "/api/placeholder/600/400",
      tags: ["E-commerce", "Performance Marketing", "SEO/SEM", "Email Marketing"],
      results: [
        "1M+ website visitors in launch month",
        "15% conversion rate",
        "ROI 300% in first quarter"
      ]
    },
    {
      id: 8,
      title: "Influencer Marketing Campaign",
      category: "social-media",
      client: "Beauty Brand",
      year: "2023",
      description: "Kampanye influencer marketing dengan 100+ macro dan micro influencers untuk produk kecantikan.",
      image: "/api/placeholder/600/400",
      tags: ["Influencer Marketing", "Beauty", "UGC", "Community Building"],
      results: [
        "10M+ total reach",
        "300K+ UGC content created",
        "250% increase in sales"
      ]
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy/5 via-white to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-center">
              Portfolio <span className="text-gold">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Karya-karya terbaik kami dalam membantu berbagai brand mencapai kesuksesan melalui 
              strategi periklanan dan kreatif yang inovatif.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? 'bg-gold hover:bg-gold/90 text-white' 
                      : 'border-navy text-navy hover:bg-navy hover:text-white'
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-navy focus:border-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-navy/10 to-gold/10 overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold text-white">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Title & Client */}
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gold font-medium mb-3">
                    {project.client}
                  </p>

                  {/* Project Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Key Results */}
                  <div className="space-y-1 mb-4">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start text-sm text-gray-600">
                        <span className="text-gold mr-2">•</span>
                        <span className="line-clamp-1">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-white group"
                  >
                    Lihat Detail
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Tidak ada proyek yang ditemukan dengan filter yang dipilih.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prestasi Kami
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Angka-angka yang menunjukkan dedikasi kami dalam memberikan hasil terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                500+
              </div>
              <p className="text-lg opacity-90">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                100+
              </div>
              <p className="text-lg opacity-90">Klien Puas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                50+
              </div>
              <p className="text-lg opacity-90">Penghargaan</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                10+
              </div>
              <p className="text-lg opacity-90">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Siap Membangun Proyek Sukses Bersama?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Mari diskusikan kebutuhan branding dan marketing Anda dengan tim profesional kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-full"
            >
              Mulai Proyek Anda
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-navy text-navy hover:bg-navy hover:text-white text-lg px-8 py-6 rounded-full"
            >
              Lihat Studi Kasus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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