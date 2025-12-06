'use client'

import { useState, useEffect } from 'react'
import { Shield, Eye, Lock, UserCheck, Database, AlertCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/navigation'

export default function PrivacyPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const lastUpdated = "15 November 2024"

  const privacyPrinciples = [
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Keamanan Data",
      description: "Kami menggunakan enkripsi dan teknologi keamanan terkini untuk melindungi data pribadi Anda."
    },
    {
      icon: <Eye className="w-8 h-8 text-gold" />,
      title: "Transparansi",
      description: "Kami memberikan informasi yang jelas tentang bagaimana data Anda dikumpulkan dan digunakan."
    },
    {
      icon: <Lock className="w-8 h-8 text-gold" />,
      title: "Kontrol Pengguna",
      description: "Anda memiliki kontrol penuh atas data pribadi Anda dan dapat meminta perubahan atau penghapusan."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-gold" />,
      title: "Kepatuhan",
      description: "Kami mematuhi standar internasional seperti GDPR dan regulasi perlindungan data Indonesia."
    }
  ]

  const dataCategories = [
    {
      category: "Informasi Identitas Pribadi",
      examples: ["Nama lengkap", "Email", "Nomor telepon", "Alamat"],
      purpose: "Identifikasi dan komunikasi dengan klien"
    },
    {
      category: "Informasi Profesional",
      examples: ["Nama perusahaan", "Jabatan", "Industri", "Ukuran perusahaan"],
      purpose: "Memahami kebutuhan bisnis dan menyediakan layanan yang sesuai"
    },
    {
      category: "Informasi Teknis",
      examples: ["IP address", "Browser information", "Cookies", "Usage data"],
      purpose: "Meningkatkan pengalaman pengguna dan keamanan website"
    },
    {
      category: "Informasi Komunikasi",
      examples: ["Riwayat komunikasi", "Preferensi layanan", "Feedback"],
      purpose: "Memberikan layanan yang lebih baik dan personalisasi"
    }
  ]

  const userRights = [
    {
      right: "Hak Akses",
      description: "Anda berhak mengetahui data pribadi apa yang kami simpan tentang Anda."
    },
    {
      right: "Hak Koreksi",
      description: "Anda dapat memperbaiki data pribadi yang tidak akurat atau tidak lengkap."
    },
    {
      right: "Hak Penghapusan",
      description: "Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu."
    },
    {
      right: "Hak Pembatasan",
      description: "Anda dapat membatasi pengolahan data pribadi Anda dalam kondisi tertentu."
    },
    {
      right: "Hak Portabilitas",
      description: "Anda berhak menerima data pribadi Anda dalam format yang terstruktur."
    },
    {
      right: "Hak Keberatan",
      description: "Anda dapat keberatan terhadap pengolahan data pribadi Anda."
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
              Kebijakan <span className="text-gold">Privasi</span>
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Komitmen kami dalam melindungi data pribadi Anda sesuai standar internasional 
              dan regulasi perlindungan data yang berlaku.
            </p>
            <p className="text-center text-gray-500 mt-4">
              Terakhir diperbarui: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Prinsip Privasi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk melindungi privasi Anda dengan prinsip-prinsip berikut:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Data yang Kami Kumpulkan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami hanya mengumpulkan data yang diperlukan untuk menyediakan layanan terbaik kepada Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {category.category}
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Contoh:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, exampleIndex) => (
                        <span 
                          key={exampleIndex}
                          className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Tujuan:</h4>
                    <p className="text-gray-600 text-sm">
                      {category.purpose}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Bagaimana Kami Menggunakan Data Anda
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Penyediaan Layanan</h3>
                    <p className="text-gray-600">
                      Untuk menyediakan layanan periklanan dan kreatif yang Anda minta.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Komunikasi</h3>
                    <p className="text-gray-600">
                      Untuk berkomunikasi dengan Anda mengenai layanan, update, dan penawaran.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Peningkatan Layanan</h3>
                    <p className="text-gray-600">
                      Untuk menganalisis dan meningkatkan kualitas layanan kami.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Kepatuhan Hukum</h3>
                    <p className="text-gray-600">
                      Untuk mematuhi kewajiban hukum dan regulasi yang berlaku.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Berapa Lama Kami Menyimpan Data
              </h2>
              <Card className="border-0 shadow-lg bg-gray-50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Data Klien Aktif</h3>
                      <p className="text-gray-600">
                        Selama hubungan bisnis berlangsung + 5 tahun setelah berakhirnya kontrak.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Data Prospek</h3>
                      <p className="text-gray-600">
                        Maksimal 2 tahun dari terakhir kali komunikasi atau permintaan penghapusan.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Data Website</h3>
                      <p className="text-gray-600">
                        Data analytics disimpan selama 26 bulan sesuai standar industri.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Data Finansial</h3>
                      <p className="text-gray-600">
                        Disimpan selama 10 tahun sesuai persyaratan perpajakan Indonesia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Hak Anda Sebagai Pengguna
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sesuai GDPR dan regulasi perlindungan data Indonesia, Anda memiliki hak-hak berikut:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {right.right}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {right.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-0 shadow-lg bg-navy text-white">
              <CardContent className="p-8">
                <AlertCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Cara Menggunakan Hak Anda</h3>
                <p className="mb-6 opacity-90">
                  Untuk menggunakan hak-hak Anda, silakan kirim email ke 
                  <span className="text-gold font-semibold"> privacy@fishnesia.com</span> 
                  dengan subjek "Request Data Privacy" dan sertakan identitas yang jelas.
                </p>
                <p className="text-sm opacity-75">
                  Kami akan merespons permintaan Anda dalam waktu 30 hari kerja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Keamanan Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menggunakan berbagai langkah keamanan untuk melindungi data pribadi Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Teknologi Keamanan
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-gold mr-3" />
                  <span>Enkripsi SSL/TLS untuk semua transmisi data</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-gold mr-3" />
                  <span>Enkripsi database untuk penyimpanan data sensitif</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-gold mr-3" />
                  <span>Firewall dan sistem deteksi intrusi</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-gold mr-3" />
                  <span>Regular security audit dan penetration testing</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-gold mr-3" />
                  <span>Access control berbasis peran (role-based)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">
                Prosedur Keamanan
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-gold mr-3" />
                  <span>Background check untuk semua staf yang mengakses data</span>
                </div>
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-gold mr-3" />
                  <span>Training reguler tentang keamanan data</span>
                </div>
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-gold mr-3" />
                  <span>Policy principle of least privilege</span>
                </div>
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-gold mr-3" />
                  <span>Incident response plan yang terdokumentasi</span>
                </div>
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-gold mr-3" />
                  <span>Regular backup dan disaster recovery plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6 text-center">
              Transfer Data Internasional
            </h2>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Data pribadi Anda dapat ditransfer ke dan diproses di negara lain selain Indonesia. 
                  Kami memastikan bahwa transfer data internasional dilakukan dengan:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span className="text-gray-700">Negara dengan tingkat perlindungan data yang setara (adequacy decision)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span className="text-gray-700">Standard Contractual Clauses (SCCs) yang disetujui oleh Komisi Eropa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span className="text-gray-700">Binding Corporate Rules (BCRs) untuk transfer intra-group</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span className="text-gray-700">Consent eksplisit dari data subject untuk transfer tertentu</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pertanyaan Tentang Privasi?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi kami, 
            jangan ragu untuk menghubungi Data Protection Officer kami.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg mb-2">
              <span className="text-gold font-semibold">Email:</span> privacy@fishnesia.com
            </p>
            <p className="text-lg mb-2">
              <span className="text-gold font-semibold">Telepon:</span> 0823-8246-6378
            </p>
            <p className="text-lg">
              <span className="text-gold font-semibold">Alamat:</span> Jl. Rungkut Industri III No.75, Surabaya
            </p>
          </div>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-full"
          >
            Hubungi DPO Kami
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
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
              </ul>
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