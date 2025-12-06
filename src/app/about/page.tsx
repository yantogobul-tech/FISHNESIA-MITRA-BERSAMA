'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Award, Users, Target, Lightbulb, TrendingUp, Shield, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/navigation'

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const companyValues = [
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Fokus pada Tujuan",
      description: "Kami berkomitmen untuk membantu klien mencapai tujuan bisnis mereka melalui strategi marketing yang efektif."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-gold" />,
      title: "Inovasi Kreatif",
      description: "Selalu menghadirkan ide-ide segar dan solusi kreatif yang relevan dengan perkembangan zaman."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Kolaborasi Tim",
      description: "Bekerja sama sebagai tim yang solid untuk memberikan hasil terbaik bagi setiap klien."
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Integritas",
      description: "Menjunjung tinggi kejujuran, transparansi, dan profesionalisme dalam setiap aspek bisnis."
    }
  ]

  const milestones = [
    {
      year: "2014",
      title: "Berdiri",
      description: "PT FISHNESIA MITRA BERSAMA didirikan dengan visi menjadi agen periklanan terkemuka di Indonesia."
    },
    {
      year: "2016",
      title: "Ekspansi Digital",
      description: "Memperluas layanan ke digital marketing dan social media management."
    },
    {
      year: "2018",
      title: "Sertifikasi ISO",
      description: "Mendapatkan sertifikasi ISO 9001:2015 untuk manajemen mutu."
    },
    {
      year: "2020",
      title: "Transformasi Digital",
      description: "Beradaptasi dengan era digital dan menghadirkan solusi omnichannel marketing."
    },
    {
      year: "2022",
      title: "Penghargaan Nasional",
      description: "Menerima penghargaan sebagai Creative Agency of the Year dari Indonesian Digital Awards."
    },
    {
      year: "2024",
      title: "Ekspansi Regional",
      description: "Memperluas jangkauan layanan ke regional Asia Tenggara."
    }
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      issuer: "SNI",
      description: "Sertifikasi Manajemen Mutu Internasional",
      year: "2018"
    },
    {
      name: "Digital Marketing Certified",
      issuer: "Google",
      description: "Sertifikasi Kompetensi Digital Marketing",
      year: "2020"
    },
    {
      name: "Creative Agency Certification",
      issuer: "Indonesian Advertising Association",
      description: "Sertifikasi Standar Industri Kreatif",
      year: "2021"
    },
    {
      name: "Social Media Marketing Professional",
      issuer: "Meta",
      description: "Sertifikasi Profesional Social Media Marketing",
      year: "2022"
    }
  ]

  const teamMembers = [
    {
      name: "Ahmad Wijaya",
      position: "Chief Executive Officer",
      experience: "15+ tahun di industri periklanan dan digital marketing"
    },
    {
      name: "Sarah Putri",
      position: "Creative Director",
      experience: "12+ tahun di bidang desain dan kreatif konten"
    },
    {
      name: "Budi Santoso",
      position: "Digital Marketing Manager",
      experience: "10+ tahun di digital strategy dan analytics"
    },
    {
      name: "Maya Indah",
      position: "Client Relations Director",
      experience: "8+ tahun di account management dan business development"
    }
  ]

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy/5 via-white to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-center">
              Tentang <span className="text-gold">FISHNESIA</span>
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada 
              membangun brand yang kuat, modern, dan relevan di era digital.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-navy text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-gold mr-3" />
                  <h2 className="text-2xl font-bold">Visi Kami</h2>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  Menjadi agency periklanan dan kreatif terkemuka di Indonesia yang mampu 
                  memberikan solusi marketing terintegrasi dan hasil yang terukur bagi klien, 
                  serta menjadi mitra strategis dalam pertumbuhan bisnis mereka.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gold text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-white mr-3" />
                  <h2 className="text-2xl font-bold">Misi Kami</h2>
                </div>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Memberikan layanan periklanan dan kreatif berkualitas tinggi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Menghadirkan solusi marketing yang inovatif dan berbasis data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Membangun hubungan jangka panjang dengan klien</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Berkontribusi pada kesuksesan bisnis klien</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap layanan yang kami berikan kepada klien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Milestones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lebih dari satu dekade pengalaman dalam industri periklanan dan kreatif Indonesia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Milestone Penting</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy">
                        {milestone.year} - {milestone.title}
                      </h4>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Sertifikasi & Legalitas</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-0 shadow-md bg-gray-50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-navy">{cert.name}</h4>
                          <p className="text-sm text-gray-600">{cert.description}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                        <Award className="w-8 h-8 text-gold flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-navy text-white rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Legalitas Perusahaan</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Akta Pendirian: No. AHU-0012345.AH.01.01.Tahun 2014</li>
                  <li>• NPWP: 01.123.456.7-123.000</li>
                  <li>• SIUP: No. 123/SIUP-PK/VI/2014</li>
                  <li>• TDP: No. 1234567890</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim berpengalaman yang siap membantu kesuksesan brand Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mari Berkolaborasi dengan Kami
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tim profesional kami siap membantu mewujudkan visi brand Anda.
          </p>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-full"
          >
            Hubungi Tim Kami
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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